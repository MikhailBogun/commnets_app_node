'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let data = getTestData(50)
    console.log(data)
    return queryInterface.bulkInsert('Twits', data)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Twits', null, {});
  }
};

function getTestData(count) {
  return [...Array(count).keys()].map(i => test(6))
}

function test(i) {
 return  {
    "text": 'Test' + i,
    "userId": 5,
    "count_messages": 0,
    "createdAt": new Date(),
    "updatedAt": new Date()
  }
}