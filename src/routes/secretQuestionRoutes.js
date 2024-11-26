'use strict';
const express = require('express');
const { createSecretQuestion, getSecretQuestion, getSecretQuestionById, deleteSecretQuestion, updateSecretQuestion } = require('../controllers/secretQuestionController');
const { secretQuestionValidator } = require('../validators/allValidators');
const checkValidations = require('../middleware/validationMiddleware');
const router = express.Router();


// Create a new SecretQuestion
router.post('/', secretQuestionValidator, checkValidations, createSecretQuestion);


// Get all SecretQuestions
router.get('/', getSecretQuestion);


// Get a SecretQuestion by ID
router.get('/:id', getSecretQuestionById);


// Update a SecretQuestion by ID
router.patch('/:id', updateSecretQuestion);

// Delete a SecretQuestion by ID
router.delete('/:id', deleteSecretQuestion);

module.exports = router;
