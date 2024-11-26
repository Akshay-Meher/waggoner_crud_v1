const express = require('express');
const router = express.Router();
const testController = require('../controllers/testController');
const checkValidations = require('../middleware/validationMiddleware');
const { createAndUpdateTestValidation } = require('../validators/allValidators');


// Create a new test
router.post('/', createAndUpdateTestValidation, checkValidations, testController.createTest);

// Get all tests
router.get('/', testController.getAllTests);

// Get a test by ID
router.get('/:id', testController.getTestById);

// Update a test
router.patch('/:id', testController.updateTest);

// Delete a test
router.delete('/:id', testController.deleteTest);

module.exports = router;
