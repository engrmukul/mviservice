'use strict';
const db = require("../../db/models/index");

function Vehicle() {
    this.getVehicleByRegNumber = async (req) => {
        const data = { ...req.body};
        return db.vehicle.getVehicleByRegNumber(data);
    };
    this.createVehicle = async (req) => {
        const data = { ...req.body};
        return db.vehicle.createVehicle(data);
    };
    // this.getCompany = async () => {
    //     return db.insurance_company.getCompany();
    // };
    // this.getVehicleByRegNumber = async (reg_number) => {
    //     return db.vehicle.getVehicleByRegNumber(reg_number);
    // };
    // this.updateCompanyById = async (req) => {
    //     const data = { ...req.body};
    //     return db.insurance_company.updateCompany(data);
    // };
    // this.deleteCompanyById = async (id) => {
    //     return db.insurance_company.deleteCompanyById(id);
    // };
}

module.exports = Vehicle;