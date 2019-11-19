'use strict';
module.exports = (sequelize, DataTypes) => {
  const vehicle_information = sequelize.define('vehicle_information', {
    VehicleNumber: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    VehicleType: DataTypes.ENUM('Motorcycle','Auto','Rickshaw', 'Car', 'SUV / Micro Bus', 'Bus', 'Truck'),
    ManufacturerName: DataTypes.STRING,
    ModelName: DataTypes.STRING,
    YearManufacturer: DataTypes.STRING,
    EngineNumber: DataTypes.STRING,
    ChasisNumber: DataTypes.STRING,
    CC: DataTypes.STRING,
    Color: DataTypes.STRING,
    SeatingCapacity: DataTypes.STRING
  }, {});
  vehicle_information.associate = function (models) {
    // associations can be defined here
  };
  vehicle_information.createVehicleInformation = function (data) {
    var model = {};
    if (data.VehicleNumber) model.VehicleNumber = data.VehicleNumber.trim();
    if (data.VehicleType) model.VehicleType = data.VehicleType.trim();
    if (data.ManufacturerName) model.ManufacturerName = data.ManufacturerName.trim();
    if (data.ModelName) model.ModelName = data.ModelName.trim();
    if (data.YearManufacturer) model.YearManufacturer = data.YearManufacturer.trim();
    if (data.EngineNumber) model.EngineNumber = data.EngineNumber.trim();
    if (data.ChasisNumber) model.ChasisNumber = data.ChasisNumber.trim();
    if (data.CC) model.CC = data.CC.trim();
    if (data.Color) model.Color = data.Color.trim();
    if (data.SeatingCapacity) model.SeatingCapacity = data.SeatingCapacity.trim();

    return vehicle_information.create(model);
  };

  vehicle_information.getVehicleInformationByVehicleNumber = function (VehicleNumber) {
    return vehicle_information.findOne({
      where: {
        VehicleNumber: VehicleNumber
      }
    });
  };

  vehicle_information.getVehicles = function () {
    return vehicle_information.findAll();
  };

  vehicle_information.updateVehicleInformationByVehicleNumber = function (data) {
    var model = {};
    if (data.VehicleNumber) model.VehicleNumber = data.VehicleNumber.trim();
    if (data.VehicleType) model.VehicleType = data.VehicleType.trim();
    if (data.ManufacturerName) model.ManufacturerName = data.ManufacturerName.trim();
    if (data.ModelName) model.ModelName = data.ModelName.trim();
    if (data.YearManufacturer) model.YearManufacturer = data.YearManufacturer.trim();
    if (data.EngineNumber) model.EngineNumber = data.EngineNumber.trim();
    if (data.ChasisNumber) model.ChasisNumber = data.ChasisNumber.trim();
    if (data.CC) model.CC = data.CC.trim();
    if (data.Color) model.Color = data.Color.trim();
    if (data.SeatingCapacity) model.SeatingCapacity = data.SeatingCapacity.trim();

    return vehicle_information.update(model, {
      where: {
        VehicleNumber: data.VehicleNumber
      }
    });
  };

  return vehicle_information;
};