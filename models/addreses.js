'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class addresses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      addresses.belongsTo(models.users,{
        foreignKey:'user_id',
      })
    }
  };
  addresses.init({
    student_id: {
      type: DataTypes.INTEGER,
      allowNull:false,
      references: {
        model: {
          model: 'users',
          key: 'id',
        }
    }},
    prefecture_id: {
      type: DataTypes.INTEGER,
      allowNull:false,
    },
    city: {
      type: DataTypes.STRING(10),
      allowNull:false,
    },
    building: {
      type: DataTypes.STRING(30),
      allowNull:false,
    },
    zip_code: {
      type: DataTypes.STRING(30),
      allowNull:false,
    },

  }, {
    sequelize,
    modelName: 'addresses',
  });
  return addresses;
};