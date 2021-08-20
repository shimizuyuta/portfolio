'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: {
            tableName: 'users',
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
    await queryInterface.dropTable('addresses');
  }
};