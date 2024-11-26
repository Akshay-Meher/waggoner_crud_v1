'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Licenses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_start_date: {
        type: Sequelize.DATE
      },
      is_trial: {
        type: Sequelize.BOOLEAN
      },
      license_code: {
        type: Sequelize.STRING
      },
      distributor: {
        type: Sequelize.STRING
      },
      distributor_email_body: {
        type: Sequelize.STRING
      },
      is_distributor_email_sent: {
        type: Sequelize.BOOLEAN
      },
      is_trial15_sent: {
        type: Sequelize.BOOLEAN
      },
      is_trial3_sent: {
        type: Sequelize.BOOLEAN
      },
      is_activated: {
        type: Sequelize.BOOLEAN
      },
      is_banned: {
        type: Sequelize.BOOLEAN
      },
      pc_name: {
        type: Sequelize.STRING
      },
      trial_license_code: {
        type: Sequelize.STRING
      },
      last_start_date: {
        type: Sequelize.DATE
      },
      last_access_date: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Licenses');
  }
};