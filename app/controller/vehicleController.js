const Vehicle = require('../models/vehicleModel');

exports.checkInsuranceExistance = (req, res) => {
    Vehicle.checkInsuranceExistance(req.params.reg_number);
};