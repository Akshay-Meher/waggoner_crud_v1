
const express = require('express');
const router = express.Router();
const diagnosisController = require('../controllers/diagnosisController');
const { createAndUpdateDiagnosisValidation } = require('../validators/allValidators');
const checkValidations = require('../middleware/validationMiddleware');

// Create a new diagnosis
router.post('/', createAndUpdateDiagnosisValidation, checkValidations, diagnosisController.createDiagnosis);

// Get all diagnoses
router.get('/', diagnosisController.getAllDiagnoses);

// Get a diagnosis by ID
router.get('/:id', diagnosisController.getDiagnosisById);

// Update a diagnosis
router.patch('/:id', diagnosisController.updateDiagnosis);

// Delete a diagnosis
router.delete('/:id', diagnosisController.deleteDiagnosis);

module.exports = router;
