'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: Sequelize.INTEGER
      },

      username: {
        type: Sequelize.STRING,
        unique: true
      },
      hashed_password:{
        type: Sequelize.STRING,
        defaultValue: ""
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: ""
      },
      salt: {
        type: Sequelize.STRING,
        defaultValue: ""
      },
      image: {
        type: Sequelize.STRING,
        defaultValue: ""
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
    await queryInterface.dropTable('Users');
  }
};