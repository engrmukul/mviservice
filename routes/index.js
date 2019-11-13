const vehicleController = require('../controller/vehicle');
module.exports = (app) => {

    app.get('/api', (req, res) => {
        res.status(200).send({
            data: "Welcome Node Sequlize API v1"
        })
    })

    app.get('/api/vehicle/:reg_number', vehicleController.findOne);
}