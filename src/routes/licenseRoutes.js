const express = require('express');
const router = express.Router();
const { licenseController, getLicenseController, updateLicenseController,
    deleteLicenseController } = require('../controllers/licenseController');
const { licenseValidator } = require('../validators/allValidators');
const checkValidations = require('../middleware/validationMiddleware');



router.post('/:user_id', licenseValidator, checkValidations, licenseController);

router.get('/:id', getLicenseController);

// router.get('/:id', userController.getUserById);

router.patch('/:id', updateLicenseController);

router.delete('/:id', deleteLicenseController);

module.exports = router;