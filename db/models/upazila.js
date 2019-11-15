'use strict';

module.exports = (sequelize, DataTypes) => {
    const upazila = sequelize.define('upazila', {
        district_id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        bn_name: DataTypes.STRING
    }, {});
    upazila.associate = function (models) {
        // associations can be defined here
    };
    upazila.getUpazilaByDistrictId = function (district_id) {
        return upazila.findOne({
            where: {
                district_id: district_id
            }
        });
    };
    return upazila;
};