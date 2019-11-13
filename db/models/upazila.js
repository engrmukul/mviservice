'use strict';
module.exports = (sequelize, DataTypes) => {
  const Upazila = sequelize.define('Upazila', {
    name: DataTypes.STRING
  }, {});
  Upazila.associate = function(models) {
    // associations can be defined here
  };
  return Upazila;
};