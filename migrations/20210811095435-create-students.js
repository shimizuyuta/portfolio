'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      password: {
        allowNull: false,
        type: Sequelize.UUID
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING(10)
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING(10)
      },
      age: {
        allowNull: false,
        type: Sequelize.INTEGER(2)
      },
      starts: {
        allowNull: false,
        type: Sequelize.INTEGER(2)
      },
      belong_num: {
        allowNull: false,
        type: Sequelize.INTEGER(2)
      },
      sex_num: {
        allowNull: false,
        type: Sequelize.INTEGER(2)
      },

      mail: {
        allowNull: false,
        type: Sequelize.STRING(30)
      },
      profile: {
        allowNull: false,
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('students');
  }
};