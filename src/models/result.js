'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Result extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Result.belongsTo(models.Test, { foreignKey: 'test_id' });

      Result.belongsTo(models.Patient, { foreignKey: 'patient_id', targetKey: 'id' });

      Result.belongsToMany(models.Diagnosis, {
        through: models.ResultDiagnosis,
        foreignKey: 'result_id'
      });

    }
  }
  Result.init({
    test_id: DataTypes.INTEGER,
    test_name: DataTypes.STRING,
    eye: DataTypes.STRING,
    binocular: DataTypes.INTEGER,
    take_date: DataTypes.DATE,
    patient_id: DataTypes.STRING,
    right_eye_test_id: DataTypes.STRING,
    prev_eye_test_id: DataTypes.STRING,
    d15_path: DataTypes.STRING,
    calculated_result: DataTypes.STRING,
    diagnosis_notes: DataTypes.STRING,
    result_notes: DataTypes.STRING,
    sections: DataTypes.STRING,
    diagnosis: DataTypes.STRING,
    isDeleted: DataTypes.BOOLEAN,
    xamarin_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Result',
  });
  return Result;
};