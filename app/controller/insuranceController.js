'use strict';
const Insurance = require("../models/insuranceModel");

exports.createInsurance = (req, res) => {
    return (new Insurance()).create(req)
    .then((insurance) => {
        res.status(200).send({
            success: true,
            message: "insurance creation succeeded.",
            data: insurance
        })
    })
    .catch((errors) => {
        res.status(400).send({
            success: false,
            message: "insurance creation failed.",
            errors: Array.isArray(errors) == true ? errors : [{msg: errors.message}]
        })
    })
};

exports.getInsurance = (req, res) => {
    return (new Insurance()).getCompany()
    .then((insurance) => {
        res.status(200).send({
            success: true,
            message: "insurance get succeeded.",
            data: insurance
        })
    })
    .catch((errors) => {
        res.status(400).send({
            success: false,
            message: "insurance get failed.",
            errors: Array.isArray(errors) == true ? errors : [{msg: errors.message}]
        })
    })
};

exports.getInsuranceById = (req, res) => {
    return (new Insurance()).getCompanyById(req.params.id)
    .then((insurance) => {
        res.status(200).send({
            success: true,
            message: "insurance get succeeded.",
            data: insurance
        })
    })
    .catch((errors) => {
        res.status(400).send({
            success: false,
            message: "insurance get failed.",
            errors: Array.isArray(errors) == true ? errors : [{msg: errors.message}]
        })
    })
};

exports.deleteInsuranceById = (req, res) => {
    return (new Insurance()).deleteCompanyById(req.params.id)
    .then((insurance) => {
        res.status(200).send({
            success: true,
            message: "insurance delete succeeded.",
            data: insurance
        })
    })
    .catch((errors) => {
        res.status(400).send({
            success: false,
            message: "insurance delete failed.",
            errors: Array.isArray(errors) == true ? errors : [{msg: errors.message}]
        })
    })
};