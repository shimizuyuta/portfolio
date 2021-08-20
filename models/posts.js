'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      posts.belongsTo(models.users,{
        as:'student'
      }),
      posts.belongsTo(models.users,{
        as:'elder'
      })
    }
  };
  posts.init({
    post_title:DataTypes.STRING,
    post_description:DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'posts',
  });
  return posts;
};