const { check } = require('express-validator');
const { User } = require('../models');
const { where } = require('sequelize');

exports.validateRegister = [
    check('first_name').notEmpty().withMessage('First name is required'),
    check('last_name').notEmpty().withMessage('Last name is required'),
    check('email_address').isEmail().withMessage('Please include a valid email')
        .custom(async (email) => {
            const user = await User.findOne({
                where: { email_address: email }
            });
            console.log('user', user);
            if (user) {
                throw new Error('Email already exists');
            }
        }),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    check('confirm_password')
        .notEmpty().withMessage('confirm_password is required')
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Passwords do not match');
            }
            return true;
        })
];

exports.validateLogin = [
    check('email_address').isEmail().withMessage('Please include a valid email'),
    check('password').notEmpty().withMessage('Password is required')
];
