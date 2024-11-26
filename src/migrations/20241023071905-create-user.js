'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      license_id: {
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      phone_number: {
        type: Sequelize.STRING
      },
      email_address: {
        type: Sequelize.STRING
      },
      company_name: {
        type: Sequelize.STRING
      },
      website_url: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      zip_code: {
        type: Sequelize.STRING
      },
      secret_question: {
        type: Sequelize.STRING
      },
      secret_question_answer: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      d15_selected: {
        type: Sequelize.INTEGER
      },
      show_disorders_selected: {
        type: Sequelize.INTEGER
      },
      auditory_response: {
        type: Sequelize.INTEGER
      },
      extend_enabled: {
        type: Sequelize.INTEGER
      },
      logo: {
        type: Sequelize.STRING
      },
      reports_path: {
        type: Sequelize.STRING
      },
      is_deleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      license_key: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Users');
  }
};