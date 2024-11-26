const express = require('express');
const router = express.Router();
const countryController = require('../controllers/countryController');
const { countryValidator } = require('../validators/allValidators');
const checkValidations = require('../middleware/validationMiddleware');


router.post('/:userId', countryValidator, checkValidations, countryController.createCountry);

router.get('/', countryController.getCountries);

router.get('/:id', countryController.getCountryById);

router.patch('/:id', countryController.updateCountry);

router.delete('/:id', countryController.deleteCountry);

module.exports = router;
