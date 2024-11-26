const { Model, where } = require('sequelize');
const { ResultDiagnosis } = require('../models');

const createResultDiagnosis = async (req, res) => {
    try {
        const {
            diagnosis_id,
            result_id,
            isDeleted
        } = req.body;

        const resultDiagnosis = await ResultDiagnosis.create({
            diagnosis_id,
            result_id,
            isDeleted
        });

        res.status(201).json(resultDiagnosis);
    } catch (error) {
        console.log("error", error);
        res.status(400).json({ error: error.message });
    }
}


const getAllResultDiagnosis = async (req, res) => {
    try {
        const resultDiagnoses = await ResultDiagnosis.findAll(
            {
                where: { isDeleted: false }
            }
        );
        console.log("ALL resultDiagnoses", resultDiagnoses);
        res.status(200).json(resultDiagnoses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


const getResultDiagnosis = async (req, res) => {
    try {
        const resultDiagnosis = await ResultDiagnosis.findOne({
            where: { id: req.params.id, isDeleted: false },
        });
        console.log("resultDiagnoses", resultDiagnosis);
        if (!resultDiagnosis) {
            return res.status(404).json({ error: 'ResultDiagnosis not found' });
        }
        res.status(200).json(resultDiagnosis);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


const updateResultDiagnosis = async (req, res) => {
    try {
        const {
            diagnosis_id,
            result_id,
            isDeleted
        } = req.body;

        const [updated] = await ResultDiagnosis.update({
            diagnosis_id,
            result_id,
            isDeleted
        }, {
            where: { id: req.params.id }
        });

        if (!updated) {
            return res.status(404).json({ error: 'ResultDiagnosis not found' });
        }

        const updatedResultDiagnosis = await ResultDiagnosis.findByPk(req.params.id);
        res.status(200).json(updatedResultDiagnosis);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


const deleteResultDiagnosis = async (req, res) => {
    try {
        const { id } = req.params;
        const Result = await ResultDiagnosis.findByPk(id);

        if (!Result) {
            return res.status(404).json({ message: 'ResultDiagnosis not found' });
        }

        await ResultDiagnosis.update({ isDeleted: true }, { where: { id } });

        return res.status(203).json({ msg: "ResultDiagnosis marked as deleted." });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
    }
}




module.exports = { createResultDiagnosis, getAllResultDiagnosis, getResultDiagnosis, updateResultDiagnosis, deleteResultDiagnosis };