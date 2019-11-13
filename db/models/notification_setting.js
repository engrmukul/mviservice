'use strict';
module.exports = (sequelize, DataTypes) => {
  const Notification_setting = sequelize.define('Notification_setting', {
    SMS: DataTypes.STRING
  }, {});
  Notification_setting.associate = function(models) {
    // associations can be defined here
  };
  return Notification_setting;
};