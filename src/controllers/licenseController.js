const { where } = require("sequelize");
const { License, User } = require("../models");

const licenseController = async (req, res) => {
    try {
        const { user_id } = req.params;
        const {
            first_start_date,
            is_trial,
            license_code,
            distributor,
            distributor_email_body,
            is_distributor_email_sent,
            is_trial15_sent,
            is_trial3_sent,
            is_activated,
            is_banned,
            pc_name,
            trial_license_code,
            last_start_date,
            last_access_date,
        } = req.body;

        const newLicense = await License.create({
            first_start_date,
            is_trial,
            license_code,
            distributor,
            distributor_email_body,
            is_distributor_email_sent,
            is_trial15_sent,
            is_trial3_sent,
            is_activated,
            is_banned,
            pc_name,
            trial_license_code,
            last_start_date,
            last_access_date,
        });

        if (newLicense) {
            await User.update(
                { license_id: newLicense.id },
                { where: { id: user_id } }
            )
        }

        // console.log('newLicense', newLicense);
        return res.json(newLicense);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Something went wrong!");
    }
};

const getLicenseController = async (req, res) => {
    try {
        const { id } = req.params;

        // const licenseInfo = await License.findByPk(id);
        const licenseInfo = await License.findAll({
            where: { id }
        });

        if (licenseInfo) {
            return res.json(licenseInfo);
        } else {
            return res.send("Record not found");
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send("Something went wrong!");
    }
};

const updateLicenseController = async (req, res) => {
    try {
        const { id } = req.params;
        const licenseInfo = await License.findByPk(id);
        const { first_start_date,
            is_trial,
            license_code,
            distributor,
            distributor_email_body,
            is_distributor_email_sent,
            is_trial15_sent,
            is_trial3_sent,
            is_activated,
            is_banned,
            pc_name,
            trial_license_code,
            last_start_date,
            last_access_date } = req.body;

        if (licenseInfo) {
            const updated = await License.update({
                first_start_date,
                is_trial,
                license_code,
                distributor,
                distributor_email_body,
                is_distributor_email_sent,
                is_trial15_sent,
                is_trial3_sent,
                is_activated,
                is_banned,
                pc_name,
                trial_license_code,
                last_start_date,
                last_access_date,
            },
                { where: { id } }

            );
            if (updated) {

                return res.status(200).send('updated');
            }
        } else {
            return res.send("Record you want to update does not exist!");
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send("Something went wrong!");
    }
};

const deleteLicenseController = async (req, res) => {
    try {

        const { id } = req.params;
        const licenseInfo = await License.findByPk(id);

        if (licenseInfo) {

            // await License.update(
            //     { isDeleted: 1 },
            //     { where: { id } }
            // );

            await License.destroy({
                where: { id }
            })
            return res.status(200).send("License Information deleted Successfully!");
        } else {
            return res.send("Record you want to delete does not exist!");
        }

    } catch (error) {
        console.log(error);
        return res.status(500).send("Something went wrong!!");
    }
}

module.exports = {
    licenseController,
    getLicenseController,
    updateLicenseController,
    deleteLicenseController
};