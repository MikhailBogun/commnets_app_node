'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'John',
        email: 'example@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Test2',
        email: 'example@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Test3',
        email: 'example@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
  
  
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
