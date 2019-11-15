'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('insurance_informations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      VehicleNumber: {
        type: Sequelize.STRING
      },
      CurrentStatus: {
        type: Sequelize.ENUM('Insured', 'Expired', 'Not Insured')
      },
      CICN: {
        type: Sequelize.STRING
      },
      ExpireyDate: {
        type: Sequelize.DATEONLY
      },
      CCFNI: {
        type: Sequelize.INTEGER
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Insurance_informations');
  }
};