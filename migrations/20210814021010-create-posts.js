'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      elder_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'cascade', 
        onDelete: 'cascade', 
        references: {
          model:'users',key:'id'
        },
      },
      student_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onUpdate: 'cascade', 
        onDelete: 'cascade', 
        references: {
          model:'users',key:'id'
        },
      },
      post_title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      post_description: {
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
    await queryInterface.dropTable('posts');
  }
};