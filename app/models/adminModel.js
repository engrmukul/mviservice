'use strict';
const db = require("../../db/models/index");

function Admin() {
    this.getInsurances = async () => {
        return db.insurance_information.getInsurances();
    };
    this.getVehicles = async () => {
        return db.vehicle_information.getVehicles();
    };
    this.getUsers = async () => {
        return db.personal_information.getUsers();
    };
}

module.exports = Admin;