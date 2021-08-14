'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static fullName(){
      return this.firstName + this.lasName
    }

    static associate(models) {
      // define association here
      
    }
  };
  students.init({
    firstName: DataTypes.STRING,
    lasName: DataTypes.STRING,
    password: DataTypes.UUID,
    age: DataTypes.INTEGER,
    starts: DataTypes.INTEGER,
    belong_num: DataTypes.INTEGER,
    sex_num: DataTypes.INTEGER,
    mail: DataTypes.STRING,
    profile: DataTypes.TEXT,

  }, {
    sequelize,
    modelName: 'students',
  });
  return students;
};