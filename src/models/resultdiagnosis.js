'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ResultDiagnosis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ResultDiagnosis.belongsTo(models.Diagnosis, { foreignKey: 'diagnosis_id' });

      ResultDiagnosis.belongsTo(models.Result, {
        through: models.ResultDiagnosis,
        foreignKey: 'result_id'
      });
    }
  }
  ResultDiagnosis.init({
    diagnosis_id: DataTypes.INTEGER,
    result_id: DataTypes.INTEGER,
    isDeleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ResultDiagnosis',
  });
  return ResultDiagnosis;
};