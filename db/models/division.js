'use strict';
module.exports = (sequelize, DataTypes) => {
    const division = sequelize.define('division', {
        name: DataTypes.STRING,
        bn_name: DataTypes.STRING
    }, {});
    division.associate = function (models) {
        // associations can be defined here
    };
    division.getDivision = function () {
        return division.findAll();
    };

    return division;
};