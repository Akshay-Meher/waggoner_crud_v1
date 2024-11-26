const { body, check } = require('express-validator');

// Utility function to check date format and future dates
const validateDate = (value, { req }) => {
    const regex = /^\d{2}-\d{2}-\d{4}$/;
    if (!regex.test(value)) {
        throw new Error('Date must be in MM-DD-YYYY format.');
    }
    const [month, day, year] = value.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    if (isNaN(date)) {
        throw new Error('Invalid date.');
    }
    if (date > new Date()) {
        throw new Error('Date cannot be in the future.');
    }
    return true;
};


const validateBirthDate = (value, { path }) => {
    const regex = /^\d{2}-\d{2}-\d{4}$/; // MM-DD-YYYY format
    if (!regex.test(value)) {
        // throw new Error('Date must be in MM-DD-YYYY format.');
        throw new Error(`${path} must be in MM-DD-YYYY format.`);
    }
    const [month, day, year] = value.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    if (isNaN(date)) {
        // throw new Error('Invalid date.');
        throw new Error(`${path} must be in MM-DD-YYYY format.`);
    }
    if (date > new Date()) {
        // throw new Error('Date cannot be in the future.');
        throw new Error(`${path} cannot be in the future.`);
    }
    return true;
};


// Test Validator
const createAndUpdateTestValidation = [
    body('title').trim().notEmpty().withMessage('Title is required.'),
    body('image').notEmpty().withMessage('Image is required.'),
    body('description').notEmpty().withMessage('Description is required.'),
    body('test_order').notEmpty().withMessage('Test order is required.'),
];

// Diagnosis Validator
const createAndUpdateDiagnosisValidation = [
    body('name').trim().notEmpty().withMessage('Name is required.'),
    body('icd10').optional().isString().withMessage('ICD10 must be a string.'),
    body('notes').optional().isString().withMessage('Notes must be a string.'),
    body('is_new').optional().isBoolean().withMessage('Is New must be a boolean.'),
    body('is_genetic').optional().isBoolean().withMessage('Is Genetic must be a boolean.'),
    body('is_deleted').optional().isBoolean().withMessage('Is Deleted must be a boolean.'),
];

// Country Validator
const countryValidator = [
    body('name').isString().withMessage('Name must be a string.').notEmpty().withMessage('Name is required.'),
    body('code').isString().withMessage('Code must be a string.').notEmpty().withMessage('Code is required.'),
];

// HearAboutUs Validator
const hearAboutUsValidator = [
    body('name').isString().withMessage('Name must be a string.').notEmpty().withMessage('Name is required.'),
    body('has_text_field')
        .notEmpty()
        .withMessage('Has Text Field is required.')
        .isBoolean()
        .withMessage('Has Text Field must be a boolean.'),
    body('text_field_text').optional().isString().withMessage('Text Field Text must be a string.'),
    body('is_selected').optional().isBoolean().withMessage('Is Selected must be a boolean.'),
];

// License Validator
const licenseValidator = [
    body('first_start_date').notEmpty().withMessage('First start date is required.').custom(validateDate),
    body('license_code').notEmpty().withMessage('License code is required.'),
    body('distributor').notEmpty().withMessage('Distributor is required.'),
    body('is_trial').isBoolean().withMessage('Is Trial must be a boolean.'),
    body('is_activated').isBoolean().withMessage('Is Activated must be a boolean.'),
    body('last_start_date').notEmpty().withMessage('Last start date is required.').custom(validateDate),
];

// Patient Validator
const PatientValidator = [
    body('first_name').trim().notEmpty().withMessage('First name is required.').isAlpha().withMessage('First name should only contain letters.'),
    body('last_name').trim().notEmpty().withMessage('Last name is required.').isAlpha().withMessage('Last name should only contain letters.'),
    body('date_of_birth').notEmpty().withMessage('Date of Birth is required.').custom(validateBirthDate),
    body('last_time_test_taken').optional().custom(validateBirthDate),
    body('gender')
        .notEmpty()
        .withMessage('Gender is required.')
        .isIn(['male', 'female', 'other'])
        .withMessage('Gender must be "male", "female", or "other".'),
    body('phone').trim().notEmpty().withMessage('Phone is required.').isMobilePhone().withMessage('Phone number must be valid.'),
    body('email').optional().isEmail().withMessage('Email must be valid.'),
];

// Result Validator
const resultValidator = [
    body('test_id').isInt({ min: 1 }).withMessage('Test ID must be a positive integer.'),
    body('test_name').notEmpty().withMessage('Test name is required.'),
    body('eye').isIn(['left', 'right', 'both']).withMessage('Eye must be "left", "right", or "both".'),
    body('patient_id').notEmpty().withMessage('Patient ID is required.'),
];

// Result Diagnosis Validator
const resultDiagnosisValidator = [
    body('diagnosis_id').isInt().withMessage('Diagnosis ID must be an integer.').notEmpty().withMessage('Diagnosis ID is required.'),
    body('result_id').isInt().withMessage('Result ID must be an integer.').notEmpty().withMessage('Result ID is required.'),
];

// Result Section Validator
const resultSectionValidator = [
    body('result_id').isInt().withMessage('Result ID must be an integer.').notEmpty().withMessage('Result ID is required.'),
    body('patient_id').isString().withMessage('Patient ID must be a string.').notEmpty().withMessage('Patient ID is required.'),
];

// Section Validator
const sectionValidator = [
    body('name').notEmpty().withMessage('Name is required.'),
    body('totalTestPlates')
        .isInt({ gt: 0 })
        .withMessage('Total Test Plates must be a positive integer.'),
    body('correctAnswersToPass')
        .isInt({ gt: 0 })
        .withMessage('Correct Answers to Pass must be a positive integer.'),
];

// Secret Question Validator
const secretQuestionValidator = [
    body('name').notEmpty().withMessage('Name is required.'),
    body('code').notEmpty().withMessage('Code is required.'),
];

// Export Validators
module.exports = {
    sectionValidator,
    secretQuestionValidator,
    resultSectionValidator,
    resultValidator,
    resultDiagnosisValidator,
    PatientValidator,
    licenseValidator,
    hearAboutUsValidator,
    countryValidator,
    createAndUpdateDiagnosisValidation,
    createAndUpdateTestValidation,
};
