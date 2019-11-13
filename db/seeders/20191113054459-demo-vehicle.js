'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Vehicles', [{
        reg_number: 'DHAKA-H-461086',
        mobile: '01734183130',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Vehicles', null, {});
  }
};
