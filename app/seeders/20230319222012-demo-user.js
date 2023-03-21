'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'John1',
        email: 'examaapl3e@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Test82',
        email: 'example2@hexaaample.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'Test37',
        email: 'example1@exaaamphle.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
  
  
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
