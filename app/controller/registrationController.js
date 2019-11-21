'use strict';
const Registration = require("../models/registrationModel");

exports.createRegistration = (req, res) => {

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
      }
    
      // The name of the input field (i.e. "UploadPicture") is used to retrieve the uploaded file
      let UploadPicture = req.files.UploadPicture;
    
      // Use the mv() method to place the file somewhere on your server
      UploadPicture.mv('/filename.jpg', function(err) {
        if (err)
          return res.status(500).send(err);
    
        res.send('File uploaded!');
      });

    return (new Registration()).createRegistration(req)
    .then((registration) => {
        res.status(200).send({
            success: true,
            message: "registration succeeded.",
            //data: registration
        })
    })
    .catch((errors) => {
        res.status(400).send({
            success: false,
            message: "registration failed.",
            errors: Array.isArray(errors) == true ? errors : [{msg: errors.message}]
        })
    })
};

exports.getRegistrationByVehicleNumber = (req, res) => {
    return (new Registration()).getRegistrationByVehicleNumber(req.params.VehicleNumber)
    .then((registration) => {
        res.status(200).send({
            success: true,
            message: "registration get succeeded.",
            data: registration
        })
    })
    .catch((errors) => {
        res.status(400).send({
            success: false,
            message: "registration get failed.",
            errors: Array.isArray(errors) == true ? errors : [{msg: errors.message}]
        })
    })
};

exports.updatePersonalInformationByVehicleNumber = (req, res) => {
    return (new Registration()).updatePersonalInformationByVehicleNumber(req)
    .then((personal) => {
        if(personal == 1){
            res.status(200).send({
                success: true,
                message: "personal information update succeeded."
            })
        }else{
            res.status(201).send({
                success: false,
                message: "personal information update failed."
            })
        }
    })
    .catch((errors) => {
        res.status(400).send({
            success: false,
            message: "personal information update failed.",
            errors: Array.isArray(errors) == true ? errors : [{msg: errors.message}]
        })
    })
};

exports.updateVehicleInformationByVehicleNumber = (req, res) => {
    return (new Registration()).updateVehicleInformationByVehicleNumber(req)
    .then((vehicle) => {
        if(vehicle == 1 ){
            res.status(200).send({
                success: true,
                message: "vehicle information update succeeded."
            })
        }else{
            res.status(201).send({
                success: false,
                message: "vehicle information update failed."
            })
        } 
    })
    .catch((errors) => {
        res.status(400).send({
            success: false,
            message: "vehicle information update failed.",
            errors: Array.isArray(errors) == true ? errors : [{msg: errors.message}]
        })
    })
};

exports.updateInsuranceInformationByVehicleNumber = (req, res) => {
    return (new Registration()).updateInsuranceInformationByVehicleNumber(req)
    .then((insurance) => {
        if(insurance == 1){
            res.status(200).send({
                success: true,
                message: "insurance information update succeeded."
            })
        }else{
            res.status(201).send({
                success: false,
                message: "insurance information update succeeded."
            })
        }
    })
    .catch((errors) => {
        res.status(400).send({
            success: false,
            message: "insurance information update failed.",
            errors: Array.isArray(errors) == true ? errors : [{msg: errors.message}]
        })
    })
};

exports.updateNotificationSettingByVehicleNumber = (req, res) => {
    return (new Registration()).updateNotificationSettingByVehicleNumber(req)
    .then((notification) => {
        if(notification == 1){
            res.status(200).send({
                success: true,
                message: "notification information update succeeded."
            })
        }else{
            res.status(201).send({
                success: false,
                message: "notification information update succeeded."
            })
        }
    })
    .catch((errors) => {
        res.status(400).send({
            success: false,
            message: "notification information update failed.",
            errors: Array.isArray(errors) == true ? errors : [{msg: errors.message}]
        })
    })
};