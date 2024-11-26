'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ResultSection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ResultSection.belongsTo(models.Result, { foreignKey: 'result_id' });
      ResultSection.belongsTo(models.Patient, { foreignKey: 'patient_id' });
    }
  }
  ResultSection.init({
    result_id: DataTypes.INTEGER,
    patient_id: DataTypes.STRING,
    eye: DataTypes.STRING,
    section_type: DataTypes.INTEGER,
    section_name: DataTypes.STRING,
    correct_answers: DataTypes.INTEGER,
    incorrect_answers: DataTypes.INTEGER,
    total_answers: DataTypes.INTEGER,
    is_passed: DataTypes.INTEGER,
    as_result_string: DataTypes.STRING,
    isDeleted: DataTypes.BOOLEAN,
    xamarin_result_section_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ResultSection',
  });
  return ResultSection;
};