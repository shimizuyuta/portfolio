'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('post_ditails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      post_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model:'posts',key:'id'
        },
      },
      post_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      prefecture_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING
      },
      building: {
        allowNull: false,
        type: Sequelize.STRING
      },
      zip_code: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('post_ditails');
  }
};