'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HearAboutUs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      HearAboutUs.belongsTo(models.User, { foreignKey: 'user_id' });
    }
  }
  HearAboutUs.init({
    name: DataTypes.STRING,
    has_text_field: DataTypes.BOOLEAN,
    text_field_text: DataTypes.STRING,
    is_selected: DataTypes.BOOLEAN,
    user_id: DataTypes.INTEGER,
    is_deleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'HearAboutUs',
  });
  return HearAboutUs;
};