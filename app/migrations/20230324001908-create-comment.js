'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: "Users",
          key: "id"
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      twitId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: "Twits",
          key: "id"
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      parent_id: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      text: {
        type: Sequelize.STRING,
        defaultValue:""
      },
      image: {
        type: Sequelize.STRING,
        defaultValue: ""
      },
      file: {
        type: Sequelize.STRING,
        defaultValue: ""
      },
      count_messages: {
        type: Sequelize.INTEGER,
        defaultValue: 0
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Comments');
  }
};