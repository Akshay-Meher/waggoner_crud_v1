
const express = require('express');
const router = express.Router();
const { Result } = require('../models');
const { createResult, getResult, updateResult, deleteResult } = require('../controllers/resultController');
const { resultValidator } = require('../validators/allValidators');
const checkValidations = require('../middleware/validationMiddleware');



router.post('/', resultValidator, checkValidations, createResult);

// Read Result
router.get('/:resultId', getResult);

// Update Result
router.patch('/:resultId', updateResult);

// Delete Result 
router.delete('/:resultId', deleteResult);

module.exports = router;