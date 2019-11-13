'use strict';
module.exports = (sequelize, DataTypes) => {
  const insurance_company = sequelize.define('insurance_company', {
    CompanyName: DataTypes.STRING,
    Phone: DataTypes.STRING,
    Email: DataTypes.STRING,
    Address: DataTypes.STRING
  }, {});
  insurance_company.associate = function(models) {
    // associations can be defined here
  };
  return insurance_company;
};