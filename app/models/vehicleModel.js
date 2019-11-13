
const Vehicle = require('../models/vehicleModel');

exports.checkInsuranceExistance = (req, res) => {
    Vehicle.findByPk(req)
        .then(vehicle => {
            if (!vehicle) {
                return res.status(404).send({
                    message: "vehicle not found with reg_number " + req
                });
            }
            res.send(vehicle);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "vehicle not found with reg_number " + req
                });
            }
            return res.status(500).send({
                message: "Error retrieving vehicle with reg_number " + req
            });
        });
};