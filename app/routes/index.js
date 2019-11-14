const vehicleController = require('../controller/vehicleController');
const insuranceController = require("../controller/insuranceController");
module.exports = (app) => {

    app.get('/api', (req, res) => {
        res.status(200).send({
            data: "Welcome Node Sequlize API v1"
        })
    })
    app.post('/api/insurance',insuranceController.createInsurance);
    app.get('/api/insurance',insuranceController.getInsurance);
    app.get('/api/insurance/:id',insuranceController.getInsuranceById);
    app.delete('/api/insurance/:id',insuranceController.deleteInsuranceById);
    app.get('/api/vehicle/:reg_number', vehicleController.checkInsuranceExistance);
}