
const express = require('express');
const { createPatient, getPatient, updatePatient, deletePatient, getAllPatient } = require('../controllers/patientController');
const { PatientValidator } = require('../validators/allValidators');
const checkValidations = require('../middleware/validationMiddleware');
const router = express.Router();


// Create Patient
router.post('/:userId', PatientValidator, checkValidations, createPatient);

// Read Patient
router.get('/:userId', getPatient);

router.get('/', getAllPatient);

// Update Patient
router.patch('/:patient_id', updatePatient);

// Delete Patient
router.delete('/:id', deletePatient);

module.exports = router;
