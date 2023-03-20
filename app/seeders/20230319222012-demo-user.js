'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'John',
        email: 'exampl3e@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Test2',
        email: 'example2@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Test3',
        email: 'example1@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
  
  
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
