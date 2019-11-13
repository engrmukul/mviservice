'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('vehicle_informations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      VehicleNumber: {
        type: Sequelize.STRING
      },
      VehicleType: {
        type: Sequelize.ENUM('Motorcycle','Auto','Rickshaw', 'Car', 'SUV / Micro Bus', 'Bus', 'Truck')
      },
      ManufacturerName: {
        type: Sequelize.STRING
      },
      ModelName: {
        type: Sequelize.STRING
      },
      YearManufacturer: {
        type: Sequelize.STRING
      },
      EngineNumber: {
        type: Sequelize.STRING
      },
      ChasisNumber: {
        type: Sequelize.STRING
      },
      CC: {
        type: Sequelize.STRING
      },
      Color: {
        type: Sequelize.STRING
      },
      SeatingCapacity: {
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Vehicle_informations');
  }
};