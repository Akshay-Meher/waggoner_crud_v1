'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class License extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      License.hasOne(models.User, { foreignKey: 'license_id' });

    }
  }
  License.init({
    first_start_date: DataTypes.DATE,
    is_trial: DataTypes.BOOLEAN,
    license_code: DataTypes.STRING,
    distributor: DataTypes.STRING,
    distributor_email_body: DataTypes.STRING,
    is_distributor_email_sent: DataTypes.BOOLEAN,
    is_trial15_sent: DataTypes.BOOLEAN,
    is_trial3_sent: DataTypes.BOOLEAN,
    is_activated: DataTypes.BOOLEAN,
    is_banned: DataTypes.BOOLEAN,
    pc_name: DataTypes.STRING,
    trial_license_code: DataTypes.STRING,
    last_start_date: DataTypes.DATE,
    last_access_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'License',
  });
  return License;
};