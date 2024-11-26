'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Results', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      test_id: {
        type: Sequelize.INTEGER
      },
      test_name: {
        type: Sequelize.STRING
      },
      eye: {
        type: Sequelize.STRING
      },
      binocular: {
        type: Sequelize.INTEGER
      },
      take_date: {
        type: Sequelize.DATE
      },
      patient_id: {
        type: Sequelize.STRING
      },
      right_eye_test_id: {
        type: Sequelize.STRING
      },
      prev_eye_test_id: {
        type: Sequelize.STRING
      },
      d15_path: {
        type: Sequelize.STRING
      },
      calculated_result: {
        type: Sequelize.STRING
      },
      diagnosis_notes: {
        type: Sequelize.STRING
      },
      result_notes: {
        type: Sequelize.STRING
      },
      sections: {
        type: Sequelize.STRING
      },
      diagnosis: {
        type: Sequelize.STRING
      },
      isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      xamarin_id: {
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
    await queryInterface.dropTable('Results');
  }
};