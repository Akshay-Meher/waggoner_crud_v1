'use strict';
const express = require('express');
const { createSection, getAllSection, getSectionById, updateSection, deleteSection } = require('../controllers/sectionController');
const { sectionValidator } = require('../validators/allValidators');
const checkValidations = require('../middleware/validationMiddleware');
const router = express.Router();


// Create a new Section
router.post('/', sectionValidator, checkValidations, createSection);

// Get all Sections
router.get('/', getAllSection);

// Get a Section by ID
router.get('/:id', getSectionById);

// Update a Section by ID
router.patch('/:id', updateSection);

// Delete a Section by ID
router.delete('/:id', deleteSection);

module.exports = router;
