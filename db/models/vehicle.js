'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vehicle = sequelize.define('Vehicle', {
    reg_number: DataTypes.STRING,
    mobile: DataTypes.STRING
  }, {});
  Vehicle.associate = function(models) {
    // associations can be defined here
  };
  return Vehicle;
};

exports.findOne = (req, res) => {
  Vehicle.findByPk(req.params.reg_number)
      .then(vehicle => {
          if (!vehicle) {
              return res.status(404).send({
                  message: "vehicle not found with reg_number " + req.params.reg_number
              });
          }
          res.send(vehicle);
      }).catch(err => {
          if (err.kind === 'ObjectId') {
              return res.status(404).send({
                  message: "vehicle not found with reg_number " + req.params.reg_number
              });
          }
          return res.status(500).send({
              message: "Error retrieving vehicle with reg_number " + req.params.reg_number
          });
      });
};