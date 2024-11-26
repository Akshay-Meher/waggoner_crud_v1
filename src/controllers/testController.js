const { Test } = require('../models');

// Create a new test
exports.createTest = async (req, res) => {
    try {
        const { title, image, description, test_order, isDeleted } = req.body;
        const test = await Test.create({ title, image, description, test_order, isDeleted });
        res.status(201).json(test);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all tests
exports.getAllTests = async (req, res) => {
    try {
        const tests = await Test.findAll();
        res.status(200).json(tests);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get a single test by ID
exports.getTestById = async (req, res) => {
    try {
        const test = await Test.findByPk(req.params.id);
        if (!test) {
            return res.status(404).json({ error: 'Test not found' });
        }
        res.status(200).json(test);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a test
exports.updateTest = async (req, res) => {
    try {
        const test = await Test.findByPk(req.params.id);
        if (!test) {
            return res.status(404).json({ error: 'Test not found' });
        }
        const { title, image, description, test_order, isDeleted } = req.body;
        await test.update({ title, image, description, test_order, isDeleted });
        res.status(200).json(test);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a test
exports.deleteTest = async (req, res) => {
    try {
        const test = await Test.findByPk(req.params.id);
        if (!test) {
            return res.status(404).json({ error: 'Test not found' });
        }
        await test.destroy();
        res.status(204).send('test deleted');
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
