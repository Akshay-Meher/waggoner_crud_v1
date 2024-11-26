'use strict';
const express = require('express');
const { createResultDiagnosis, getAllResultDiagnosis, getResultDiagnosis, updateResultDiagnosis, deleteResultDiagnosis } = require('../controllers/resultDiagnosisController');
const { resultDiagnosisValidator } = require('../validators/allValidators');
const checkValidations = require('../middleware/validationMiddleware');
const router = express.Router();


// Create a new ResultDiagnosis
router.post('/', resultDiagnosisValidator, checkValidations, createResultDiagnosis);

// Get all ResultDiagnoses
router.get('/', getAllResultDiagnosis);

// Get a ResultDiagnosis by ID
router.get('/:id', getResultDiagnosis);

// Update a ResultDiagnosis by ID
router.patch('/:id', updateResultDiagnosis);

// Delete a ResultDiagnosis by ID
router.delete('/:id', deleteResultDiagnosis);

module.exports = router;
