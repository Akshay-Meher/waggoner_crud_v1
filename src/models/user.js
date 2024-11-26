'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Country, { foreignKey: 'user_id' });
      User.hasOne(models.HearAboutUs, { foreignKey: 'user_id' });
      // License
      User.belongsTo(models.License, { foreignKey: 'license_id' });

      User.hasMany(models.Patient, { foreignKey: 'user_id' });
    }
  }
  User.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    email_address: DataTypes.STRING,
    company_name: DataTypes.STRING,
    website_url: DataTypes.STRING,
    country: DataTypes.STRING,
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    address: DataTypes.STRING,
    zip_code: DataTypes.STRING,
    secret_question: DataTypes.STRING,
    secret_question_answer: DataTypes.STRING,
    password: DataTypes.STRING,
    d15_selected: DataTypes.INTEGER,
    show_disorders_selected: DataTypes.INTEGER,
    auditory_response: DataTypes.INTEGER,
    extend_enabled: DataTypes.INTEGER,
    logo: DataTypes.STRING,
    reports_path: DataTypes.STRING,
    is_deleted: DataTypes.BOOLEAN,
    license_key: DataTypes.STRING,
    license_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};