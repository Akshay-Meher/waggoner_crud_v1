'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Patient.hasMany(models.Result, { foreignKey: 'patient_id' });

      Patient.belongsTo(models.User, { foreignKey: 'user_id' });

      Patient.hasMany(models.ResultSection, { foreignKey: 'patient_id' });
    }
  }
  Patient.init({
    user_id: DataTypes.INTEGER,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    date_of_birth: DataTypes.DATE,
    gender: DataTypes.STRING,
    patient_id: DataTypes.STRING,
    last_time_test_taken: DataTypes.DATE,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    isDeleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Patient',
  });
  return Patient;
};