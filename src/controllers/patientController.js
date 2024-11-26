const { where } = require('sequelize');
const { Patient } = require('../models');

const createPatient = async (req, res) => {
    try {
        const { userId } = req.params;
        const {
            first_name,
            last_name,
            date_of_birth,
            gender,
            patient_id,
            last_time_test_taken,
            phone,
            email,
            isDeleted,
        } = req.body;

        const BOD = new Date(date_of_birth);
        console.log('date_of_birth', BOD);
        console.log('BOD', BOD);

        const patient = await Patient.create({
            user_id: userId,
            first_name,
            last_name,
            date_of_birth,
            gender,
            patient_id,
            last_time_test_taken,
            phone,
            email,
            isDeleted,
        });

        return res.status(201).json(patient);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: error.message });
    }
}

const getPatient = async (req, res) => {
    try {
        const { userId } = req.params;

        const patient = await Patient.findOne({
            where: {
                user_id: userId,
                isDeleted: false,
            },
        });

        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }

        return res.json(patient);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}


const getAllPatient = async (req, res) => {
    try {
        const patient = await Patient.findAll({
            where: { isDeleted: false }
        });

        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }

        return res.status(200).json(patient);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}


const updatePatient = async (req, res) => {
    try {
        const { patient_id } = req.params;
        const { ...updates } = req.body;

        const patient = await Patient.findOne({
            where: {
                id: patient_id,
            },
        });

        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }

        await patient.update(updates);

        return res.json(patient);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}


const deletePatient = async (req, res) => {
    try {

        const { id } = req.params;
        const patient = await Patient.findOne({
            where: {
                id
            },
        });

        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }

        await patient.update({ isDeleted: true });

        return res.json({ message: 'Patient deleted successfully' });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}



module.exports = { createPatient, getPatient, getAllPatient, updatePatient, deletePatient };