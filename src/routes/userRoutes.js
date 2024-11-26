const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { validateUser, updateUserValidator } = require('../validators/userValidator');
const upload = require('../config/multerConfig');
const multer = require('multer');

const validateFile = (req, res, next) => {
    upload.single('logo')(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            // Handle Multer-specific errors
            return res.status(400).json({ message: err.message });
        } else if (err) {
            // Handle other errors (e.g., unsupported file type)
            return res.status(400).json({ message: err.message });
        }
        next();
    });
};

router.post('/', validateFile, validateUser, userController.createUser);

router.get('/', userController.getUsers);

router.get('/:id', userController.getUserById);

router.patch('/:id', updateUserValidator, userController.updateUser);

router.delete('/:id', userController.deleteUser);

module.exports = router;
