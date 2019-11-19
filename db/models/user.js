'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    Email: DataTypes.STRING,
    Password: DataTypes.STRING
  }, {});

  user.associate = function (models) {
    // associations can be defined here
  };

  user.login = function (data) {
    
    return user.findOne({
      where: {
        Email: data.email,
        Password: data.password
      }
    });
  };

  return user;
};