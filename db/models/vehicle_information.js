'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vehicle_information = sequelize.define('Vehicle_information', {
    vehicle_number: DataTypes.STRING
  }, {});
  Vehicle_information.associate = function(models) {
    // associations can be defined here
  };
  return Vehicle_information;
};