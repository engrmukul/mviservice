'use strict';
module.exports = (sequelize, DataTypes) => {
    const vehicle = sequelize.define('vehicle', {
        RegNumber: DataTypes.STRING,
        Mobile: DataTypes.STRING
    }, {});
    vehicle.associate = function (models) {
        // associations can be defined here
    };
    vehicle.getVehicleByRegNumber = function (data) {
        return vehicle.findOne({
            where: {
                RegNumber: data.RegNumber,
                Mobile: data.Mobile
            }
        });
    };

    vehicle.createVehicle = function (data) {
        var model = {};
        if (data.VehicleNumber) model.RegNumber = data.VehicleNumber.trim();
        if (data.Mobile) model.Mobile = data.Mobile.trim();
            
        return vehicle.create(model);
      };

    return vehicle;
};