const { validationResult } = require('express-validator');
const { User } = require('../models');
const bcrypt = require('bcryptjs');


// exports.createUser = async (req, res) => {

//     // const errors = validationResult(req);
//     // if (!errors.isEmpty()) {
//     //     return res.status(400).json({ errors: errors.array() });
//     // }

//     // try {
//     //     const user = await User.create(req.body);
//     //     res.status(201).json(user);
//     // } catch (error) {
//     //     res.status(500).json({ message: error.message });
//     // }

//     // Validate request


//     // try {

//     //     const errors = validationResult(req);
//     //     if (!errors.isEmpty()) {
//     //         return res.status(400).json({ errors: errors.array() });
//     //     }

//     //     // Destructure and sanitize input
//     //     const {
//     //         first_name,
//     //         last_name,
//     //         phone_number,
//     //         email_address,
//     //         password,
//     //         country,
//     //         state,
//     //         city,
//     //         address,
//     //         zip_code,
//     //         secret_question,
//     //         secret_question_answer,
//     //         license_id,
//     //         is_deleted,
//     //     } = req.body;

//     //     // Encrypt the password
//     //     const hashedPassword = await bcrypt.hash(password, 10);

//     //     // Create user
//     //     const user = await User.create({
//     //         first_name,
//     //         last_name,
//     //         phone_number,
//     //         email_address,
//     //         password: hashedPassword,
//     //         country,
//     //         state,
//     //         city,
//     //         address,
//     //         zip_code,
//     //         secret_question,
//     //         secret_question_answer,
//     //         license_id,
//     //         is_deleted: is_deleted || false,
//     //     });

//     //     res.status(201).json({ msg: 'User created successfully.', user });
//     // } catch (error) {
//     //     console.error(error);
//     //     res.status(500).json({ msg: 'Internal server error.' });
//     // }

//     try {
//         // Destructure all fields from req.body
//         const {
//             first_name,
//             last_name,
//             phone_number,
//             email_address,
//             company_name,
//             website_url,
//             country,
//             state,
//             city,
//             address,
//             zip_code,
//             secret_question,
//             secret_question_answer,
//             password,
//             d15_selected,
//             show_disorders_selected,
//             auditory_response,
//             extend_enabled,
//             logo,
//             reports_path,
//             is_deleted,
//             license_key,
//             license_id,
//         } = req.body;

//         const hashedPassword = await bcrypt.hash(password, 10);

//         // Create the user in the database
//         const newUser = await User.create({
//             first_name,
//             last_name,
//             phone_number,
//             email_address,
//             company_name,
//             website_url,
//             country,
//             state,
//             city,
//             address,
//             zip_code,
//             secret_question,
//             secret_question_answer,
//             password: hashedPassword,
//             d15_selected,
//             show_disorders_selected,
//             auditory_response,
//             extend_enabled,
//             logo,
//             reports_path,
//             is_deleted,
//             license_key,
//             license_id,
//         });

//         // Send success response
//         return res.status(201).json({
//             message: 'User created successfully',
//             user: newUser,
//         });
//     } catch (error) {
//         console.error('Error creating user:', error);

//         // Handle validation or server errors
//         return res.status(500).json({
//             message: 'Failed to create user',
//             error: error.message,
//         });
//     }



// };


const fs = require('fs');
const path = require('path');

// Ensure that the directory exists
const ensureDirectoryExists = (dirPath) => {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
};


exports.createUser = async (req, res) => {
    try {
        // Destructure fields from req.body
        const {
            first_name,
            last_name,
            phone_number,
            email_address,
            company_name,
            website_url,
            country,
            state,
            city,
            address,
            zip_code,
            secret_question,
            secret_question_answer,
            password,
            d15_selected,
            show_disorders_selected,
            auditory_response,
            extend_enabled,
            reports_path,
            is_deleted,
            license_key,
            license_id,
        } = req.body;


        if (!req.file) {
            return res.status(400).json({ message: 'Logo file is required.' });
        }

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map(error => error.msg);
            return res.status(400).json({ errors: errorMessages });
        }


        // Move file from the temp directory to the final upload directory
        const tempPath = req.file.path;
        const uploadDir = path.join(__dirname, '..', '..', 'public', 'upload');
        const targetPath = path.join(uploadDir, req.file.filename);


        ensureDirectoryExists(uploadDir);

        fs.renameSync(tempPath, targetPath);

        const newUser = await User.create({
            first_name,
            last_name,
            phone_number,
            email_address,
            company_name,
            website_url,
            country,
            state,
            city,
            address,
            zip_code,
            secret_question,
            secret_question_answer,
            password,
            d15_selected,
            show_disorders_selected,
            auditory_response,
            extend_enabled,
            logo: `/upload/${req.file.filename}`,
            reports_path,
            is_deleted,
            license_key,
            license_id,
        });


        return res.status(201).json({
            message: 'User created successfully',
            user: newUser,
        });

    } catch (error) {
        console.error('Error creating user:', error);


        if (req.file && fs.existsSync(req.file.path)) {
            fs.unlinkSync(req.file.path);
        }

        return res.status(500).json({
            message: 'Failed to create user',
            error: error.message,
        });
    }
};






exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// exports.updateUser = async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }

//     try {
//         const user = await User.findByPk(req.params.id);
//         if (!user) return res.status(404).json({ message: 'User not found' });

//         await user.update(req.body);
//         res.status(200).json(user);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };


exports.updateUser = async (req, res) => {
    // Validate request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { id } = req.params;
        const updates = req.body;


        if (updates.password) {
            updates.password = await bcrypt.hash(updates.password, 10);
        }

        // Update user in the database
        const [updated] = await User.update(updates, { where: { id } });

        if (updated) {
            const updatedUser = await User.findByPk(id);
            return res.status(200).json({ message: 'User updated successfully.', user: updatedUser });
        }

        return res.status(404).json({ message: 'User not found.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while updating the user.', error: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        await user.destroy();
        res.status(200).json({ message: 'User deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
