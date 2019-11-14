'use strict';
const db = require("../../db/models/index");

function Insurance() {
    this.create = async (req) => {
        const data = { ...req.body};
        return db.insurance_company.createCompany(data);
    };
    this.getCompany = async () => {
        return db.insurance_company.getCompany();
    };
    this.getCompanyById = async (id) => {
        return db.insurance_company.getCompanyById(id);
    };
    this.deleteCompanyById = async (id) => {
        return db.insurance_company.deleteCompanyById(id);
    };
}

module.exports = Insurance;