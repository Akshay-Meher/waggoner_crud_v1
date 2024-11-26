'use strict';
const express = require('express');
const router = express.Router();
const { ResultSection } = require('../models');
const { createResultSection, getAllResultSection, getResult, updateResultSection, deleteResultSection } = require('../controllers/ResultSectionController');
const { resultSectionValidator } = require('../validators/allValidators');
const checkValidations = require('../middleware/validationMiddleware');

// Create a new ResultSection
router.post('/', resultSectionValidator, checkValidations, createResultSection);

// Get all ResultSections
router.get('/', getAllResultSection);

// Get a ResultSection by ID
router.get('/:id', getResult);

// Update a ResultSection by ID
router.patch('/:id', updateResultSection);

// Delete a ResultSection by ID
router.delete('/:id', deleteResultSection);

module.exports = router;
