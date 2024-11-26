const { Diagnosis } = require('../models');

exports.createDiagnosis = async (req, res) => {
    try {

        const { name, icd10, notes, is_new, is_genetic, is_deleted } = req.body;

        const diagnosis = await Diagnosis.create({
            name,
            icd10,
            notes,
            is_new,
            is_genetic,
            is_deleted
        });

        res.status(201).json(diagnosis);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.getAllDiagnoses = async (req, res) => {
    try {
        const diagnoses = await Diagnosis.findAll({
            where: { isDeleted: false }
        });
        res.status(200).json(diagnoses);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.getDiagnosisById = async (req, res) => {
    try {
        // const diagnosis = await Diagnosis.findByPk(req.params.id);
        const diagnosis = await Diagnosis.findOne({
            where: { id: req.params.id, isDeleted: false }
        });
        if (!diagnosis) {
            return res.status(404).json({ error: 'Diagnosis not found' });
        }
        res.status(200).json(diagnosis);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.updateDiagnosis = async (req, res) => {
    try {
        const diagnosis = await Diagnosis.findByPk(req.params.id);
        if (!diagnosis) {
            return res.status(404).json({ error: 'Diagnosis not found' });
        }


        const { name, icd10, notes, is_new, is_genetic, is_deleted } = req.body;

        await diagnosis.update({
            name,
            icd10,
            notes,
            is_new,
            is_genetic,
            is_deleted
        });

        res.status(200).json(diagnosis);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};



exports.deleteDiagnosis = async (req, res) => {

    try {
        const { id } = req.params;
        const diagnosisInfo = await Diagnosis.findOne({
            where: { id, isDeleted: false },
        });

        if (diagnosisInfo) {
            await Diagnosis.update({ isDeleted: true }, { where: { id } });
            return res.status(203).send("DiagnosisModel Information Deleted Successfully!");
        } else {
            return res.status(404).send("Record you want to delete does not exist!");
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send("Something went wrong!!");
    }
};
