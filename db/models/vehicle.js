'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vehicle = sequelize.define('Vehicle', {
    reg_number: DataTypes.STRING,
    mobile: DataTypes.STRING
  }, {});
  Vehicle.associate = function(models) {
    // associations can be defined here
  };
  return Vehicle;
};