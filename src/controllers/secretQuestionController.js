const { where } = require('sequelize');
const { SecretQuestion } = require('../models');

const createSecretQuestion = async (req, res) => {
    try {
        const { name, code, isDeleted } = req.body;

        const secretQuestion = await SecretQuestion.create({
            name,
            code,
            isDeleted
        });

        res.status(201).json(secretQuestion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


const getSecretQuestion = async (req, res) => {
    try {
        const secretQuestions = await SecretQuestion.findAll({
            where: { isDeleted: false }
        });
        res.status(200).json(secretQuestions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


const getSecretQuestionById = async (req, res) => {
    try {
        const secretQuestion = await SecretQuestion.findOne({
            where: { id: req.params.id, isDeleted: false }
        });
        if (!secretQuestion) {
            return res.status(404).json({ error: 'SecretQuestion not found' });
        }
        res.status(200).json(secretQuestion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


const updateSecretQuestion = async (req, res) => {
    try {
        const { name, code, isDeleted } = req.body;

        const [updated] = await SecretQuestion.update({
            name,
            code,
            isDeleted
        }, {
            where: { id: req.params.id }
        });

        if (!updated) {
            return res.status(404).json({ error: 'SecretQuestion not found' });
        }

        const updatedSecretQuestion = await SecretQuestion.findByPk(req.params.id);
        res.status(200).json(updatedSecretQuestion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


const deleteSecretQuestion = async (req, res) => {
    try {

        const { id } = req.params;
        const secretQ = await SecretQuestion.findByPk(id);
        if (!secretQ) {
            return res.status(404).json({ error: 'SecretQuestion not found' });
        }
        await SecretQuestion.update({ isDeleted: true }, { where: { id } });
        return res.status(202).json({ msg: "SecretQuestion marked as deleted." });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
    }
}



module.exports = { createSecretQuestion, getSecretQuestion, getSecretQuestionById, updateSecretQuestion, deleteSecretQuestion };