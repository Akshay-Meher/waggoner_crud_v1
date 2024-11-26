const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
require('dotenv').config();


const JWT_SECRET = process.env.JWT_SECRET || '_jwt_secret_key';

exports.registerUser = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array().map(err => err.msg) });
    }

    const { first_name, last_name, email_address, password } = req.body;

    try {

        let user = await User.findOne({ where: { email_address } });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }


        const hashedPassword = await bcrypt.hash(password, 10);


        user = await User.create({
            first_name,
            last_name,
            email_address,
            password: hashedPassword
        });


        // const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });

        // res.status(201).json({ token, user: { id: user.id, email_address: user.email_address } });

        if (user) {
            return res.status(201).json({ message: 'registration successfully completed.' });
        }

        return res.status(400).json({ message: 'registration successfully completed.' });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.loginUser = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array().map(err => err.msg) });
    }

    const { email_address, password } = req.body;

    try {

        const user = await User.findOne({ where: { email_address } });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }


        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ token, user: { id: user.id, email_address: user.email_address } });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
