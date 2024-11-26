const { Country } = require('../models');


exports.createCountry = async (req, res) => {

    const { name, code } = req.body;
    const user_id = req.params.userId;

    console.log('country Create', req.body);
    console.log('country Create', user_id);

    try {
        const country = await Country.create({ name, code, user_id });
        res.status(201).json(country);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getCountries = async (req, res) => {
    try {
        const countries = await Country.findAll();
        res.status(200).json(countries);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.getCountryById = async (req, res) => {
    try {
        const country = await Country.findByPk(req.params.id);
        if (!country) return res.status(404).json({ message: 'Country not found' });
        res.status(200).json(country);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateCountry = async (req, res) => {
    try {
        const country = await Country.findByPk(req.params.id);
        if (!country) return res.status(404).json({ message: 'Country not found' });

        await country.update(req.body);
        res.status(200).json(country);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.deleteCountry = async (req, res) => {
    try {
        const country = await Country.findOne({
            where: { id: req.params.id, isDeleted: false },
        });

        if (!country) return res.status(404).json({ message: 'Country not found' });

        await country.update({ isDeleted: true });
        res.status(200).json({ message: 'Country  deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
