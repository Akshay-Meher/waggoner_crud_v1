'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Test extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Test.hasMany(models.Result, { foreignKey: 'test_id' });
    }
  }
  Test.init({
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    test_order: DataTypes.INTEGER,
    isDeleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Test',
  });
  return Test;
};