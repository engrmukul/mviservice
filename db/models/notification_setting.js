'use strict';
module.exports = (sequelize, DataTypes) => {
  const Notification_setting = sequelize.define('Notification_setting', {
    SMS: DataTypes.BOOLEAN,
    EMAIL: DataTypes.BOOLEAN,
    CALL: DataTypes.BOOLEAN
  }, {});
  Notification_setting.associate = function (models) {
    // associations can be defined here
  };
  return Notification_setting;
};