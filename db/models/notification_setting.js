'use strict';
module.exports = (sequelize, DataTypes) => {
  const notification_setting = sequelize.define('notification_setting', {
    SMS: DataTypes.BOOLEAN,
    EMAIL: DataTypes.BOOLEAN,
    CALL: DataTypes.BOOLEAN
  }, {});
  notification_setting.associate = function (models) {
    // associations can be defined here
  };
  notification_setting.createNotificationSettings = function (data) {
    var model = {};
    if (data.SMS) model.SMS = data.SMS.trim();
    if (data.EMAIL) model.EMAIL = data.EMAIL.trim();
    if (data.CALL) model.CALL = data.CALL.trim();

    return notification_setting.create(model);
  };

  notification_setting.getNotificationSettingByVehicleNumber = function (VehicleNumber) {
    return notification_setting.findOne(VehicleNumber);
  };

  notification_setting.updateNotificationSettingByVehicleNumber = function (data) {
    var model = {};
    if (data.SMS) model.SMS = data.SMS.trim();
    if (data.EMAIL) model.EMAIL = data.EMAIL.trim();
    if (data.CALL) model.CALL = data.CALL.trim();

    return notification_setting.update(model, {
      where: {
        VehicleNumber: data.VehicleNumber
      }
    });
  };
  return notification_setting;
};