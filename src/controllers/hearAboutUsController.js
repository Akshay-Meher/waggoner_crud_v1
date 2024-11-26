const { HearAboutUs } = require('../models');

exports.createHearAboutUs = async (req, res) => {
    const { name, has_text_field, text_field_text, is_selected } = req.body;
    const user_id = req.params.userId;

    try {
        const hearAboutUs = await HearAboutUs.create({
            name, has_text_field, text_field_text,
            is_selected, user_id
        });
        return res.status(201).json(hearAboutUs);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

exports.getHearAboutUs = async (req, res) => {
    try {
        const hearAboutUsList = await HearAboutUs.findAll({
            where: { is_deleted: false }
        });
        res.status(200).json(hearAboutUsList);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getHearAboutUsById = async (req, res) => {
    try {
        const hearAboutUs = await HearAboutUs.findByPk(req.params.id);
        if (!hearAboutUs) return res.status(404).json({ message: 'HearAboutUs entry not found' });
        res.status(200).json(hearAboutUs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateHearAboutUs = async (req, res) => {
    try {
        const hearAboutUs = await HearAboutUs.findByPk(req.params.id);
        if (!hearAboutUs) return res.status(404).json({ message: 'HearAboutUs entry not found' });

        await hearAboutUs.update(req.body);
        res.status(200).json(hearAboutUs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteHearAboutUs = async (req, res) => {
    try {

        const { id } = req.params;
        const HearAboutUsInfo = await HearAboutUs.findOne({
            where: { id, is_deleted: false },
        });

        if (HearAboutUsInfo) {
            await HearAboutUs.update({ is_deleted: true }, { where: { id } });

            return res.status(202).send("HearAboutUsModel Information Deleted Successfully!");
        } else {
            return res.status(404).send("Record you want to delete does not exist!");
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
