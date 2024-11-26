












// const { body, check, validationResult } = require('express-validator');


// // Test
// const createAndUpdateTestValidation = [
//     body('title')
//         .trim()
//         .notEmpty()
//         .withMessage('Title is required'),

//     body('image')
//         .notEmpty()
//         .withMessage('image is required'),

//     body('description')
//         .notEmpty()
//         .withMessage('description is required'),

//     body('test_order')
//         .notEmpty()
//         .withMessage('test_order is required'),

// ];

// // Diagnosis
// const createAndUpdateDiagnosisValidation = [
//     body('name')
//         .trim()
//         .notEmpty()
//         .withMessage('Name is required'),

//     body('icd10')
//         .isString()
//         .withMessage('ICD10 must be a string')
//         .optional(),
//     body('notes')
//         .isString()
//         .withMessage('Notes must be a string')
//         .optional(),

//     body('is_new')
//         .isBoolean()
//         .withMessage('is_new must be a boolean')
//         .optional(),

//     body('is_genetic')
//         .isBoolean()
//         .withMessage('is_genetic must be a boolean')
//         .optional(),
//     body('is_deleted')
//         .isBoolean()
//         .withMessage('is_deleted must be a boolean')
//         .optional(),
// ];


// // Country
// const countryValidator = [
//     body('name')
//         .isString()
//         .withMessage('Name must be a string.')
//         .notEmpty()
//         .withMessage('Name is required.'),

//     body('code')
//         .isString()
//         .withMessage('Code must be a string.')
//         .notEmpty()
//         .withMessage('Code is required.'),

//     // body('isDeleted')
//     //     .isBoolean()
//     //     .withMessage('Is Deleted must be a boolean value.')
//     //     .notEmpty()
//     //     .withMessage('Is Deleted is required.'),

//     // body('user_id')
//     //     .isInt()
//     //     .withMessage('User ID must be an integer.')
//     //     .notEmpty()
//     //     .withMessage('User ID is required.'),
// ];

// // HearAboutUs
// const hearAboutUsValidator = [
//     body('name')
//         .isString()
//         .withMessage('Name must be a string.')
//         .notEmpty()
//         .withMessage('Name is required.'),

//     body('has_text_field')
//         .notEmpty()
//         .withMessage('has_text_field required.')
//         .isBoolean()
//         .withMessage('Has Text Field must be a boolean value.'),

//     body('text_field_text')
//         .notEmpty()
//         .withMessage('text_field_text is required.')
//         .isString()
//         .withMessage('Text Field Text must be a string if provided.'),

//     body('is_selected')
//         .optional()
//         .isBoolean()
//         .withMessage('Is Selected must be a boolean value.'),

//     // body('user_id')
//     //     .notEmpty()
//     //     .withMessage('user_id is required.')
//     //     .isInt()
//     //     .withMessage('User ID must be an integer.'),

//     // body('is_deleted')
//     //     .optional()
//     //     .isBoolean()
//     //     .withMessage('Is Deleted must be a boolean value.'),
// ];


// // License
// const licenseValidator = [
//     body('first_start_date')
//         .exists().withMessage('Date is required'),
//     // .custom((value) => {
//     //     // Check if the date is in YYYY-MM-DD format
//     //     const regex = /^\d{4}-\d{2}-\d{2}$/;
//     //     if (!regex.test(value)) {
//     //         throw new Error('first_start_date : Invalid date format. Use YYYY-MM-DD.');
//     //     }
//     //     return true;
//     // })
//     // .isDate().withMessage('Invalid date.'),
//     // .isISO8601()
//     // .withMessage('First start date must be a valid ISO 8601 date format (YYYY-MM-DD).'),

//     body('license_code')
//         .notEmpty()
//         .withMessage('License code is required.'),

//     body('distributor')
//         .notEmpty()
//         .withMessage('Distributor is required.'),

//     body('distributor_email_body')
//         .trim()
//         .notEmpty()
//         .withMessage('Distributor email body is required.'),

//     body('is_trial')
//         .isBoolean()
//         .withMessage('Is Trial must be a boolean value.'),

//     body('is_activated')
//         .isBoolean()
//         .withMessage('Is Activated must be a boolean value.'),

//     body('is_banned')
//         .isBoolean()
//         .withMessage('Is Banned must be a boolean value.'),

//     body('pc_name')
//         .trim()
//         .notEmpty()
//         .withMessage('PC Name is required.'),

//     body('trial_license_code')
//         .notEmpty()
//         .withMessage('Trial License Code is required.'),

//     body('last_start_date')
//         .notEmpty()
//         .withMessage('last_start_date is required.'),
//     // .isISO8601()
//     // .withMessage('Last start date must be a valid ISO 8601 date format (YYYY-MM-DD).'),

//     body('last_access_date')
//         .notEmpty()
//         .withMessage('last_access_date is required.'),
//     // .isISO8601()
//     // .withMessage('Last access date must be a valid ISO 8601 date format (YYYY-MM-DD).'),
// ]

// // Patient
// const PatientValidator = [
//     // check('user_id')
//     //     .isInt({ min: 1 })
//     //     .withMessage('User ID must be a positive integer'),
//     check('first_name')
//         .trim()
//         .notEmpty()
//         .withMessage('First name is required')
//         .isAlpha()
//         .withMessage('First name should only contain letters'),

//     check('last_name')
//         .trim()
//         .notEmpty()
//         .withMessage('Last name is required')
//         .isAlpha()
//         .withMessage('Last name should only contain letters'),

//     check('date_of_birth')
//         .optional()
//         .trim()
//         .isISO8601()
//         .withMessage('Date of birth must be a valid date'),

//     check('gender')
//         .trim()
//         .notEmpty()
//         .withMessage('Gender is required')
//         .isIn(['male', 'female', 'other'])
//         .withMessage('Gender must be either "male", "female", or "other"'),

//     check('patient_id')
//         .trim()
//         .notEmpty()
//         .withMessage('Patient ID is required'),

//     check('last_time_test_taken')
//         .optional()
//         .trim()
//         .isISO8601()
//         .withMessage('Last time test taken must be a valid date'),

//     check('phone')
//         .trim()
//         .notEmpty()
//         .withMessage('Phone is required')
//         .isMobilePhone()
//         .withMessage('Phone number must be valid'),

//     check('email')
//         .optional()
//         .trim()
//         .isEmail()
//         .withMessage('Email must be a valid email address'),

//     check('isDeleted')
//         .optional()
//         .isBoolean()
//         .withMessage('isDeleted must be a boolean value'),
// ];

// // resultDiagnosis
// const resultDiagnosisValidator = [
//     body('diagnosis_id')
//         .isString()
//         .withMessage('Diagnosis ID must be a string.')
//         .notEmpty()
//         .withMessage('Diagnosis ID is required.')
//         .custom(value => {
//             if (!/^\d+$/.test(value)) {
//                 throw new Error('Diagnosis ID must be a valid integer string.');
//             }
//             return true;
//         }),

//     body('result_id')
//         .isString()
//         .withMessage('Result ID must be a string.')
//         .notEmpty()
//         .withMessage('Result ID is required.')
//         .custom(value => {
//             if (!/^\d+$/.test(value)) {
//                 throw new Error('Result ID must be a valid integer string.');
//             }
//             return true;
//         }),

//     body('isDeleted')
//         .optional() // This field is optional
//         .isString()
//         .withMessage('Is Deleted must be a string.')
//         .custom(value => {
//             if (value && !/^(true|false)$/i.test(value)) {
//                 throw new Error('Is Deleted must be "true" or "false".');
//             }
//             return true;
//         }),
// ];

// // result
// const resultValidator = [
//     check('test_id')
//         .isInt({ min: 1 })
//         .withMessage('Test ID must be a positive integer'),
//     check('test_name')
//         .notEmpty()
//         .withMessage('Test name is required'),
//     check('eye')
//         .isString()
//         .isIn(['left', 'right', 'both'])
//         .withMessage('Eye field must be either "left", "right", or "both"'),
//     // check('take_date')
//     // .isISO8601()
//     //     .withMessage('Take date must be a valid date'),
//     check('patient_id')
//         .notEmpty()
//         .withMessage('Patient ID is required'),
//     check('isDeleted')
//         .optional()
//         .isBoolean()
//         .withMessage('isDeleted must be a boolean')
// ]

// // resultSection
// const resultSectionValidator = [
//     body('result_id')
//         .isInt()
//         .withMessage('Result ID must be an integer.')
//         .notEmpty()
//         .withMessage('Result ID is required.'),

//     body('patient_id')
//         .isString()
//         .withMessage('Patient ID must be a string.')
//         .notEmpty()
//         .withMessage('Patient ID is required.'),

//     body('eye')
//         .isString()
//         .withMessage('Eye must be a string.')
//         .optional(),

//     body('section_type')
//         .isInt()
//         .withMessage('Section type must be an integer.')
//         .optional(),

//     body('correct_answers')
//         .isInt({ gte: 0 })
//         .withMessage('Correct answers must be a non-negative integer.')
//         .optional(),
//     body('incorrect_answers')
//         .isInt({ gte: 0 })
//         .withMessage('Incorrect answers must be a non-negative integer.')
//         .optional(),

//     body('total_answers')
//         .isInt({ gte: 0 })
//         .withMessage('Total answers must be a non-negative integer.')
//         .optional(),

//     body('is_passed')
//         .isInt({ min: 0, max: 1 })
//         .withMessage('Is passed must be 0 or 1.')
//         .optional(),
//     body('as_result_string')
//         .isString()
//         .withMessage('Result string must be a string.')
//         .optional(),

//     body('isDeleted')
//         .isBoolean()
//         .withMessage('Is deleted must be a boolean.')
//         .optional(),

//     body('xamarin_result_section_id')
//         .isInt()
//         .withMessage('Xamarin result section ID must be an integer.')
//         .optional()
// ];

// // secretQuestion
// const secretQuestionValidator = [
//     body('name')
//         .notEmpty()
//         .withMessage('Name is required.'),

//     body('code')
//         .notEmpty()
//         .withMessage('Code is required.')
// ];


// // section
// const sectionValidator = [
//     body('name')
//         .notEmpty()
//         .withMessage('Name is required.'),

//     body('plates')
//         .notEmpty()
//         .withMessage('Plates is required.'),

//     body('totalTestPlates')
//         .isInt({ gt: 0 })
//         .withMessage('Total test plates must be a positive integer.'),

//     body('correctAnswersToPass')
//         .isInt({ gt: 0 })
//         .withMessage('Correct answers to pass must be a positive integer.'),

//     body('incorrectAnswersBeforeStop')
//         .isInt({ gte: 0 })
//         .withMessage('Incorrect answers before stop must be a non-negative integer.'),

//     body('isTraversed')
//         .isBoolean()
//         .withMessage('Is traversed must be a boolean.')
// ];


// module.exports = {
//     sectionValidator,
//     secretQuestionValidator,
//     resultSectionValidator,
//     resultValidator,
//     resultDiagnosisValidator,
//     PatientValidator,
//     licenseValidator,
//     hearAboutUsValidator,
//     countryValidator,
//     createAndUpdateDiagnosisValidation,
//     createAndUpdateTestValidation
// };
