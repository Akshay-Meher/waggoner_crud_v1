'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Section extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Section.init({
    name: DataTypes.STRING,
    plates: DataTypes.STRING,
    totalTestPlates: DataTypes.INTEGER,
    correctAnswersToPass: DataTypes.INTEGER,
    incorrectAnswersBeforeStop: DataTypes.INTEGER,
    isTraversed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Section',
  });
  return Section;
};