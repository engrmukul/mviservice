'use strict';
module.exports = (sequelize, DataTypes) => {
  const Personal_information = sequelize.define('Personal_information', {
    full_name: DataTypes.STRING
  }, {});
  Personal_information.associate = function(models) {
    // associations can be defined here
  };
  return Personal_information;
};