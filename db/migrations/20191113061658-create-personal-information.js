'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('personal_informations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      }, 
      FullName: {
        type: Sequelize.STRING
      },
      FathersName: {
        type: Sequelize.STRING
      },
      MothersName: {
        type: Sequelize.STRING
      },
      DateOfBirth: {
        type: Sequelize.STRING
      },
      MobileNumber: {
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      },
      Address: {
        type: Sequelize.STRING
      },
      DivisionId: {
        type: Sequelize.INTEGER
      },
      DistrictId: {
        type: Sequelize.INTEGER
      },
      ThanaId: {
        type: Sequelize.INTEGER
      },
      PostCode: {
        type: Sequelize.STRING
      },
      UploadPicture: {
        type: Sequelize.STRING
      },
      Lat: {
        type: Sequelize.STRING
      },
      Long: {
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
    return queryInterface.dropTable('Personal_informations');
  }
};