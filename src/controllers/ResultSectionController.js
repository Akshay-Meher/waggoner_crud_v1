const { where } = require('sequelize');
const { ResultSection } = require('../models');

const createResultSection = async (req, res) => {
    try {
        const {
            result_id,
            patient_id,
            eye,
            section_type,
            section_name,
            correct_answers,
            incorrect_answers,
            total_answers,
            is_passed,
            as_result_string,
            isDeleted,
            xamarin_result_section_id
        } = req.body;


        console.log('req.body', req.body);

        const resultSection = await ResultSection.create({
            result_id,
            patient_id,
            eye,
            section_type,
            section_name,
            correct_answers,
            incorrect_answers,
            total_answers,
            is_passed,
            as_result_string,
            isDeleted,
            xamarin_result_section_id
        });

        res.status(201).json(resultSection);
    } catch (error) {
        console.log("error", error);
        res.status(400).json({ error: error.message });
    }
}

const getAllResultSection = async (req, res) => {
    try {
        const resultSections = await ResultSection.findAll({
            where: { isDeleted: false }
        });
        res.status(200).json(resultSections);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


const getResult = async (req, res) => {
    try {
        const resultSection = await ResultSection.findOne({
            where: { isDeleted: false, id: req.params.id }
        });
        if (!resultSection) {
            return res.status(404).json({ error: 'ResultSection not found' });
        }
        res.status(200).json(resultSection);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}



const updateResultSection = async (req, res) => {
    try {
        const {
            result_id,
            patient_id,
            eye,
            section_type,
            section_name,
            correct_answers,
            incorrect_answers,
            total_answers,
            is_passed,
            as_result_string,
            isDeleted,
            xamarin_result_section_id
        } = req.body;

        const [updated] = await ResultSection.update({
            result_id,
            patient_id,
            eye,
            section_type,
            section_name,
            correct_answers,
            incorrect_answers,
            total_answers,
            is_passed,
            as_result_string,
            isDeleted,
            xamarin_result_section_id
        }, {
            where: { id: req.params.id }
        });

        if (!updated) {
            return res.status(404).json({ error: 'ResultSection not found' });
        }

        const updatedResultSection = await ResultSection.findByPk(req.params.id);
        res.status(200).json(updatedResultSection);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


const deleteResultSection = async (req, res) => {

    try {
        const { id } = req.params;
        const Result = await ResultSection.findByPk(id);

        if (!Result) {
            return res.status(404).json({ message: ' ResultSection not found' });
        }

        await ResultSection.update({ isDeleted: true }, { where: { id } });

        return res.status(203).json({ msg: " ResultSection marked as deleted." });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
    }
}

module.exports = { createResultSection, getAllResultSection, getResult, updateResultSection, deleteResultSection };