'use strict';

module.exports = (sequelize, DataTypes) => {
    const district = sequelize.define('district', {
        division_id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        bn_name: DataTypes.STRING,
        lat: DataTypes.DOUBLE,
        lon: DataTypes.DOUBLE,
        website: DataTypes.STRING
    }, {});
    district.associate = function (models) {
        // associations can be defined here
    };
    district.getDistrictByDivisionId = function (division_id) {
        return district.findOne({
            where: {
                division_id: division_id
            }
        });
    };
    return district;
};