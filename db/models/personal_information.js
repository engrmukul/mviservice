'use strict';
module.exports = (sequelize, DataTypes) => {
  const Personal_information = sequelize.define('Personal_information', {
    FullName: DataTypes.STRING,
    FathersName: DataTypes.STRING,
    MothersName: DataTypes.STRING,
    DateOfBirth: DataTypes.STRING,
    MobileNumber: DataTypes.STRING,
    Email: DataTypes.STRING,
    Address: DataTypes.STRING,
    DivisionId: DataTypes.INTEGER,
    DistrictId: DataTypes.INTEGER,
    ThanaId: DataTypes.INTEGER,
    PostCode: DataTypes.STRING,
    UploadPicture: DataTypes.STRING,
    Lat: DataTypes.STRING,
    Long: DataTypes.STRING
  }, {});
  Personal_information.associate = function(models) {
    // associations can be defined here
  };
  return Personal_information;
};