const { check, body } = require('express-validator');

exports.validateUser = [
    check('first_name')
        .notEmpty()
        .withMessage('First name is required')
        .isLength({ min: 2 })
        .withMessage('First name must be at least 2 characters long'),

    check('last_name')
        .notEmpty()
        .withMessage('Last name is required')
        .isLength({ min: 2 })
        .withMessage('Last name must be at least 2 characters long'),

    check('email_address')
        .notEmpty()
        .withMessage('Last name is required')
        .isEmail()
        .withMessage('Email is invalid'),

    check('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long'),

    check('phone_number')
        .optional()
        .isMobilePhone()
        .withMessage('Phone number must be a valid mobile number'),

    check('company_name')
        .optional()
        .isLength({ min: 2 })
        .withMessage('Company name must be at least 2 characters long'),

    check('website_url')
        .optional()
        .isURL()
        .withMessage('Website URL must be a valid URL'),

    body('logo').custom(async (value, { req }) => {
        // console.log("Value: ", value);
        // console.log("Req: : ",req.fileValidationError);
        // console.log("Req: : ",req.fileSizeError);

        // Check if a file was uploaded
        console.log("file Type", req.file);
        if (!req.file) {
            throw new Error('Please upload an image!');
        }

        // File validation
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];

        if (!allowedTypes.includes(req.file.mimetype)) {
            throw new Error('logo: Only JPEG, PNG, and GIF files are allowed!');
        }
        return true;
    })

];


exports.updateUserValidator = [
    body('first_name')
        .optional()
        .trim()
        .notEmpty().withMessage('First name must not be empty.'),

    body('last_name')
        .optional()
        .trim()
        .notEmpty().withMessage('Last name must not be empty.'),

    body('phone_number')
        .optional()
        .trim()
        .isMobilePhone().withMessage('Phone number must be valid.'),

    body('email_address')
        .optional()
        .trim()
        .isEmail().withMessage('Email address must be valid.'),

    body('company_name')
        .optional()
        .trim()
        .notEmpty().withMessage('Company name must not be empty.'),

    body('website_url')
        .optional()
        .trim()
        .isURL().withMessage('Website URL must be valid.'),

    body('country')
        .optional()
        .trim()
        .notEmpty().withMessage('Country must not be empty.'),

    body('state')
        .optional()
        .trim()
        .notEmpty().withMessage('State must not be empty.'),

    body('city')
        .optional()
        .trim()
        .notEmpty().withMessage('City must not be empty.'),

    body('address')
        .optional()
        .trim()
        .notEmpty().withMessage('Address must not be empty.'),

    body('zip_code')
        .optional()
        .trim()
        .isPostalCode('any').withMessage('Zip code must be valid.'),

    body('secret_question')
        .optional()
        .trim()
        .notEmpty().withMessage('Secret question must not be empty.'),

    body('secret_question_answer')
        .optional()
        .trim()
        .notEmpty().withMessage('Secret question answer must not be empty.'),

    body('password')
        .optional()
        .trim()
        .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long.'),

    body('d15_selected')
        .optional()
        .isInt({ min: 0 }).withMessage('D15 Selected must be a non-negative integer.'),

    body('show_disorders_selected')
        .optional()
        .isInt({ min: 0 }).withMessage('Show Disorders Selected must be a non-negative integer.'),

    body('auditory_response')
        .optional()
        .isInt({ min: 0 }).withMessage('Auditory Response must be a non-negative integer.'),

    body('extend_enabled')
        .optional()
        .isInt({ min: 0 }).withMessage('Extend Enabled must be a non-negative integer.'),

    body('logo')
        .optional()
        .trim()
        .notEmpty().withMessage('Logo must not be empty.'),

    body('reports_path')
        .optional()
        .trim()
        .notEmpty().withMessage('Reports path must not be empty.'),

    body('is_deleted')
        .optional()
        .isBoolean().withMessage('Is Deleted must be a boolean.'),

    body('license_key')
        .optional()
        .trim()
        .notEmpty().withMessage('License key must not be empty.'),

    body('license_id')
        .optional()
        .isInt().withMessage('License ID must be an integer.'),
];


