'use strict';
const Admin = require("../models/adminModel");

exports.getInsurances = (req, res) => {
    return (new Admin()).getInsurances()
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

exports.getVehicles = (req, res) => {
    return (new Admin()).getVehicles()
    .then((insurance) => {
        res.status(200).send({
            success: true,
            message: "Vehicle get succeeded.",
            data: insurance
        })
    })
    .catch((errors) => {
        res.status(400).send({
            success: false,
            message: "vehicle get failed.",
            errors: Array.isArray(errors) == true ? errors : [{msg: errors.message}]
        })
    })
};

exports.getUsers = (req, res) => {
    return (new Admin()).getUsers()
    .then((insurance) => {
        res.status(200).send({
            success: true,
            message: "user get succeeded.",
            data: insurance
        })
    })
    .catch((errors) => {
        res.status(400).send({
            success: false,
            message: "user get failed.",
            errors: Array.isArray(errors) == true ? errors : [{msg: errors.message}]
        })
    })
};

