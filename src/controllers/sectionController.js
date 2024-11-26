const { where } = require('sequelize');
const { Section } = require('../models');


const createSection = async (req, res) => {
    try {
        const {
            name,
            plates,
            totalTestPlates,
            correctAnswersToPass,
            incorrectAnswersBeforeStop,
            isTraversed
        } = req.body;

        const section = await Section.create({
            name,
            plates,
            totalTestPlates,
            correctAnswersToPass,
            incorrectAnswersBeforeStop,
            isTraversed
        });

        res.status(201).json(section);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



const getAllSection = async (req, res) => {
    try {
        const sections = await Section.findAll();
        res.status(200).json(sections);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


const getSectionById = async (req, res) => {
    try {
        const section = await Section.findOne({
            where: { id: req.params.id }
        });
        if (!section) {
            return res.status(404).json({ error: 'Section not found' });
        }
        res.status(200).json(section);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


const updateSection = async (req, res) => {
    try {
        const {
            name,
            plates,
            totalTestPlates,
            correctAnswersToPass,
            incorrectAnswersBeforeStop,
            isTraversed
        } = req.body;

        const [updated] = await Section.update({
            name,
            plates,
            totalTestPlates,
            correctAnswersToPass,
            incorrectAnswersBeforeStop,
            isTraversed
        }, {
            where: { id: req.params.id }
        });

        if (!updated) {
            return res.status(404).json({ error: 'Section not found' });
        }

        const updatedSection = await Section.findByPk(req.params.id);
        res.status(200).json(updatedSection);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



const deleteSection = async (req, res) => {
    try {
        const deleted = await Section.destroy({
            where: { id: req.params.id }
        });
        if (!deleted) {
            return res.status(404).json({ error: 'Section not found' });
        }
        res.status(200).send("Deleted"); // No content
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

    // try {
    //     const { id } = req.params;
    //     const secretQ = await Section.findByPk(id);
    //     if (!secretQ) {
    //         return res.status(404).json({ error: 'Section not found' });
    //     }
    //     await Section.update({ isDeleted: true }, { where: { id } });
    //     return res.status(202).json({ msg: "Section marked as deleted." });

    // } catch (error) {
    //     console.log(error);
    //     return res.status(500).json({ error: error.message });
    // }
}
module.exports = { getAllSection, createSection, getSectionById, updateSection, deleteSection };