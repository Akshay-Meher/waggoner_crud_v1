'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Diagnosis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Diagnosis.belongsToMany(models.Result, {
        through: models.ResultDiagnosis,
        foreignKey: 'diagnosis_id'
      });


      Diagnosis.hasMany(models.ResultDiagnosis, { foreignKey: 'diagnosis_id' });
    }
  }
  Diagnosis.init({
    name: DataTypes.STRING,
    icd10: DataTypes.STRING,
    notes: DataTypes.STRING,
    is_new: DataTypes.BOOLEAN,
    is_genetic: DataTypes.BOOLEAN,
    isDeleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Diagnosis',
  });
  return Diagnosis;
};