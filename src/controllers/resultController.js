
const { Result } = require("../models");

const createResult = async (req, res) => {
    try {
        const {
            test_id,
            test_name,
            eye,
            binocular,
            take_date,
            patient_id,
            right_eye_test_id,
            prev_eye_test_id,
            d15_path,
            calculated_result,
            diagnosis_notes,
            result_notes,
            sections,
            diagnosis,
            isDeleted,
            xamarin_id,
        } = req.body;

        const result = await Result.create({
            test_id,
            test_name,
            eye,
            binocular,
            take_date,
            patient_id,
            right_eye_test_id,
            prev_eye_test_id,
            d15_path,
            calculated_result,
            diagnosis_notes,
            result_notes,
            sections,
            diagnosis,
            isDeleted,
            xamarin_id,
        });

        return res.status(201).json(result);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: error.message });
    }
}


const getResult = async (req, res) => {
    try {
        const { resultId } = req.params;

        const result = await Result.findOne({
            where: {
                id: resultId,
                isDeleted: false,
            },
        });

        if (!result) {
            return res.status(404).json({ message: 'Result not found' });
        }

        return res.json(result);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}


const updateResult = async (req, res) => {
    try {
        const { resultId } = req.params;
        const updates = req.body;

        const result = await Result.findOne({
            where: {
                id: resultId,
            },
        });

        if (!result) {
            return res.status(404).json({ message: 'Result not found' });
        }

        await result.update(updates);

        return res.json(result);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}


const deleteResult = async (req, res) => {
    try {
        const { resultId } = req.params;

        const result = await Result.findOne({
            where: {
                id: resultId,
            },
        });

        if (!result) {
            return res.status(404).json({ message: 'Result not found' });
        }

        await result.update({ isDeleted: true });

        return res.json({ message: 'Result deleted successfully' });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}


module.exports = {
    createResult,
    getResult,
    updateResult,
    deleteResult
};
