'use strict';
module.exports = (sequelize, DataTypes) => {
  const Insurance_information = sequelize.define('Insurance_information', {
    CurrentStatus: DataTypes.STRING,
    CICN: DataTypes.STRING,
    ExpireyDate: DataTypes.DATEONLY,
    CCFNI: DataTypes.STRING
  }, {});
  Insurance_information.associate = function(models) {
    // associations can be defined here
  };
  return Insurance_information;
};