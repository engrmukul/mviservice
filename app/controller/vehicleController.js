'use strict';
const Vehicle = require("../models/vehicleModel");

exports.checkInsuranceExistance = (req, res) => {
    return (new Vehicle()).getVehicleByRegNumber(req)
    .then((vehicle) => {
        res.status(200).send({
            success: true,
            message: "vehicle get succeeded.",
            data: vehicle ? vehicle : ""
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