'use strict';
const Geocode = require("../models/geocodeModel");

exports.getDivision = (req, res) => {
    return (new Geocode()).getDivision()
    .then((geocode) => {
        res.status(200).send({
            success: true,
            message: "division get succeeded.",
            data: geocode
        })
    })
    .catch((errors) => {
        res.status(400).send({
            success: false,
            message: "division get failed.",
            errors: Array.isArray(errors) == true ? errors : [{msg: errors.message}]
        })
    })
};

exports.getDistrict = (req, res) => {
    return (new Geocode()).getDistrict(req.params.division_id)
    .then((geocode) => {
        res.status(200).send({
            success: true,
            message: "district get succeeded.",
            data: geocode
        })
    })
    .catch((errors) => {
        res.status(400).send({
            success: false,
            message: "district get failed.",
            errors: Array.isArray(errors) == true ? errors : [{msg: errors.message}]
        })
    })
};

exports.getUpazila = (req, res) => {
    return (new Geocode()).getUpazila(req.params.district_id)
    .then((geocode) => {
        res.status(200).send({
            success: true,
            message: "upazila get succeeded.",
            data: geocode
        })
    })
    .catch((errors) => {
        res.status(400).send({
            success: false,
            message: "upazila get failed.",
            errors: Array.isArray(errors) == true ? errors : [{msg: errors.message}]
        })
    })
};