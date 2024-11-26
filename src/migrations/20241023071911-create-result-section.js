'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ResultSections', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      result_id: {
        type: Sequelize.INTEGER
      },
      patient_id: {
        type: Sequelize.STRING
      },
      eye: {
        type: Sequelize.STRING
      },
      section_type: {
        type: Sequelize.INTEGER
      },
      section_name: {
        type: Sequelize.STRING
      },
      correct_answers: {
        type: Sequelize.INTEGER
      },
      incorrect_answers: {
        type: Sequelize.INTEGER
      },
      total_answers: {
        type: Sequelize.INTEGER
      },
      is_passed: {
        type: Sequelize.INTEGER
      },
      as_result_string: {
        type: Sequelize.STRING
      },
      isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      xamarin_result_section_id: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('ResultSections');
  }
};