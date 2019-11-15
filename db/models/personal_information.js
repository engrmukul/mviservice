'use strict';
module.exports = (sequelize, DataTypes) => {
  const personal_information = sequelize.define('personal_information', {
    FullName: DataTypes.STRING,
    VehicleNumber: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
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

  personal_information.associate = function (models) {
    // associations can be defined here
  };

  personal_information.createPersonalInformation = function (data) {
    var model = {};
    if (data.VehicleNumber) model.VehicleNumber = data.VehicleNumber.trim();
    if (data.FullName) model.FullName = data.FullName.trim();
    if (data.FathersName) model.FathersName = data.FathersName.trim();
    if (data.MothersName) model.MothersName = data.MothersName.trim();
    if (data.DateOfBirth) model.DateOfBirth = data.DateOfBirth.trim();
    if (data.MobileNumber) model.MobileNumber = data.MobileNumber.trim();
    if (data.Email) model.Email = data.Email.trim();
    if (data.Address) model.Address = data.Address.trim();
    if (data.DivisionId) model.DivisionId = data.DivisionId.trim();
    if (data.DistrictId) model.DistrictId = data.DistrictId.trim();
    if (data.ThanaId) model.ThanaId = data.ThanaId.trim();
    if (data.PostCode) model.PostCode = data.PostCode.trim();
    if (data.Lat) model.Lat = data.Lat.trim();
    if (data.Long) model.Long = data.Long.trim();

    return personal_information.create(model);
  };

  personal_information.getPersonalInformationByVehicleNumber = function (VehicleNumber) {
    return personal_information.findOne(VehicleNumber);
  };

  personal_information.updatePersonalInformationByVehicleNumber = function (data) {
    var model = {};
    if (data.VehicleNumber) model.VehicleNumber = data.VehicleNumber.trim();
    if (data.FullName) model.FullName = data.FullName.trim();
    if (data.FathersName) model.FathersName = data.FathersName.trim();
    if (data.MothersName) model.MothersName = data.MothersName.trim();
    if (data.DateOfBirth) model.DateOfBirth = data.DateOfBirth.trim();
    if (data.MobileNumber) model.MobileNumber = data.MobileNumber.trim();
    if (data.Email) model.Email = data.Email.trim();
    if (data.Address) model.Address = data.Address.trim();
    if (data.DivisionId) model.DivisionId = data.DivisionId.trim();
    if (data.DistrictId) model.DistrictId = data.DistrictId.trim();
    if (data.ThanaId) model.ThanaId = data.ThanaId.trim();
    if (data.PostCode) model.PostCode = data.PostCode.trim();
    if (data.Lat) model.Lat = data.Lat.trim();
    if (data.Long) model.Long = data.Long.trim();

    return personal_information.update(model, {
      where: {
        VehicleNumber: data.VehicleNumber
      }
    });
  };

  return personal_information;
};