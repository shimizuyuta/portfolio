'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class addreses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      addreses.belongsTo(models.Students,{
        foreignKey:'id',
        sourceKey:'user_id'
      })
    }
  };
  addreses.init({
    student_id: {
      type: Sequelize.INTEGER,
      allowNull:false,
      references: {
        model: {
          model: 'stundents',
          key: 'id',
        }
    }},
    prefecture_id: {
      type: Sequelize.INTEGER,
      allowNull:false,
    },
    city: {
      type: Sequelize.STRING(10),
      allowNull:false,
    },
    building: {
      type: Sequelize.STRING(30),
      allowNull:false,
    },
    zip_code: {
      type: Sequelize.STRING(30),
      allowNull:false,
    },

  }, {
    sequelize,
    modelName: 'addreses',
  });
  return addreses;
};