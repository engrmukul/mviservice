const Vehicle = require('../db/models/vehicle');

// exports.findOne = (req, res) => {
//     Vehicle.findByPk(req.params.reg_number)
//         .then(vehicle => {
//             if (!vehicle) {
//                 return res.status(404).send({
//                     message: "vehicle not found with reg_number " + req.params.reg_number
//                 });
//             }
//             res.send(vehicle);
//         }).catch(err => {
//             if (err.kind === 'ObjectId') {
//                 return res.status(404).send({
//                     message: "vehicle not found with reg_number " + req.params.reg_number
//                 });
//             }
//             return res.status(500).send({
//                 message: "Error retrieving vehicle with reg_number " + req.params.reg_number
//             });
//         });
// };


var a = exports.findOne = (req, res) => {
    console.log('asdadsad')
    res.send('sss');
}

