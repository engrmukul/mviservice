'use strict';
module.exports = (sequelize, DataTypes) => {
  const Division = sequelize.define('Division', {
    name: DataTypes.STRING
  }, {});
  Division.associate = function(models) {
    // associations can be defined here
  };
  return Division;
};