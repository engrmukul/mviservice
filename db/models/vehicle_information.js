'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vehicle_information = sequelize.define('Vehicle_information', {
    VehicleNumber: DataTypes.STRING,
    VehicleType: DataTypes.ENUM,
    ManufacturerName: DataTypes.STRING,
    ModelName: DataTypes.STRING,
    YearManufacturer: DataTypes.STRING,
    EngineNumber: DataTypes.STRING,
    ChasisNumber: DataTypes.STRING,
    CC: DataTypes.STRING,
    Color: DataTypes.STRING,
    SeatingCapacity: DataTypes.STRING
  }, {});
  Vehicle_information.associate = function (models) {
    // associations can be defined here
  };
  return Vehicle_information;
};