const express = require('express');
const router = express.Router();
const hearAboutUsController = require('../controllers/hearAboutUsController');
const { hearAboutUsValidator } = require('../validators/allValidators');
const checkValidations = require('../middleware/validationMiddleware');

router.post('/:userId', hearAboutUsValidator, checkValidations, hearAboutUsController.createHearAboutUs);

router.get('/', hearAboutUsController.getHearAboutUs);

router.get('/:id', hearAboutUsController.getHearAboutUsById);

router.patch('/:id', hearAboutUsController.updateHearAboutUs);

router.delete('/:id', hearAboutUsController.deleteHearAboutUs);

module.exports = router;
