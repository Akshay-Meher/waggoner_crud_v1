const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes.js');
const authRoutes = require('./authRoutes.js');
const countryRoutes = require('./countryRoutes.js');
const hearAboutUsRoutes = require('./hearAboutUsRoutes.js');
const licenseRoutes = require('./licenseRoutes.js');

const patientRoutes = require('./patientRoutes.js');
const resultRoutes = require('./resultRoutes.js');

const resulSectiontRoutes = require('./resultSectionRoutes.js');

const resultDiagnosis = require('./resultDiagnosisRoutes.js');
const secretQuestionRoutes = require('./secretQuestionRoutes.js');
const sectionRoutes = require('./sectionRoutes.js');
const diagnosisRoutes = require('./diagnosisRoutes.js');
const testRoutes = require('./testRoutes.js');


router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/country', countryRoutes);
router.use('/hearAboutUs', hearAboutUsRoutes);
router.use('/license', licenseRoutes);
router.use('/patient', patientRoutes);
router.use('/result', resultRoutes);
router.use('/resultSection', resulSectiontRoutes);
router.use('/resultDiagnosis', resultDiagnosis);
router.use('/secretQuestion', secretQuestionRoutes);
router.use('/section', sectionRoutes);
router.use('/diagnosis', diagnosisRoutes);
router.use('/test', testRoutes);


module.exports = router;