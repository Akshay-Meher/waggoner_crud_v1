'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sections', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      plates: {
        type: Sequelize.STRING
      },
      totalTestPlates: {
        type: Sequelize.INTEGER
      },
      correctAnswersToPass: {
        type: Sequelize.INTEGER
      },
      incorrectAnswersBeforeStop: {
        type: Sequelize.INTEGER
      },
      isTraversed: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Sections');
  }
};