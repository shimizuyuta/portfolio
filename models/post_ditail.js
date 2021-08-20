'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post_ditail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      post_ditail.belongsTo(models.posts)
    }
  };
  post_ditail.init({
    post_id: DataTypes.INTEGER,
    post_date: {
      allowNull: false,
      type: DataTypes.DATE
    },
    prefecture_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    city: {
      allowNull: false,
      type: DataTypes.STRING
    },
    building: {
      allowNull: false,
      type: DataTypes.STRING
    },
    zip_code: {
      allowNull: false,
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'post_ditail',
  });
  return post_ditail;
};