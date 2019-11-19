'use strict';
module.exports = (sequelize, DataTypes) => {
  const insurance_information = sequelize.define('insurance_information', {
    VehicleNumber: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    CurrentStatus: DataTypes.STRING,
    CICN: DataTypes.STRING,           //Current Insurance Company Name
    ExpireyDate: DataTypes.DATEONLY,
    CCFNI: DataTypes.STRING           //Choose company name for insurance
  }, {});
  insurance_information.associate = function (models) {
    // associations can be defined here
  };
  insurance_information.createInsuranceInformation = function (data) {
    var model = {};
    if (data.VehicleNumber) model.VehicleNumber = data.VehicleNumber.trim();
    if (data.CurrentStatus) model.CurrentStatus = data.CurrentStatus.trim();
    if (data.CICN) model.CICN = data.CICN.trim();
    if (data.ExpireyDate) model.ExpireyDate = data.ExpireyDate.trim();
    if (data.CCFNI) model.CCFNI = data.CCFNI.trim();

    return insurance_information.create(model);
  };

  insurance_information.getInsuranceInformationByVehicleNumber = function (VehicleNumber) {
    return insurance_information.findOne({
      where: {
        VehicleNumber: VehicleNumber
      }
    });
  };

  insurance_information.getInsurances = function () {
    return insurance_information.findAll({ limit: 10 });
  };

  insurance_information.updateInsuranceInformationByVehicleNumber = function (data) {
    var model = {};
    if (data.VehicleNumber) model.VehicleNumber = data.VehicleNumber.trim();
    if (data.CurrentStatus) model.CurrentStatus = data.CurrentStatus.trim();
    if (data.CICN) model.CICN = data.CICN.trim();
    if (data.ExpireyDate) model.ExpireyDate = data.ExpireyDate.trim();
    if (data.CCFNI) model.CCFNI = data.CCFNI.trim();

    return insurance_information.update(model, {
      where: {
        VehicleNumber: data.VehicleNumber
      }
    });
  };
  return insurance_information;
};