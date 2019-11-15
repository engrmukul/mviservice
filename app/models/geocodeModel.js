'use strict';
const db = require("../../db/models/index");

function Geocode() {
    this.getDivision = async () => {
        return db.division.getDivision();
    };
    this.getDistrict = async (id) => {
        return db.district.getDistrictByDivisionId(id);
    };
    this.getUpazila = async (id) => {
        return db.upazila.getUpazilaByDistrictId(id);
    };
}

module.exports = Geocode;