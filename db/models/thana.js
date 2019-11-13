'use strict';
module.exports = (sequelize, DataTypes) => {
  const Thana = sequelize.define('Thana', {
    name: DataTypes.STRING
  }, {});
  Thana.associate = function(models) {
    // associations can be defined here
  };
  return Thana;
};