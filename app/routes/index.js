const vehicleController = require('../controller/vehicleController');
const insuranceController = require("../controller/insuranceController");
const geocodeController = require("../controller/geocodeController");
const registrationController = require("../controller/registrationController");

module.exports = (app) => {

    app.get('/api', (req, res) => {
        res.status(200).send({
            data: "Welcome Node Sequlize API v1"
        })
    })

    app.post('/api/insurance',insuranceController.createInsurance);
    app.get('/api/insurance',insuranceController.getInsurance);
    app.get('/api/insurance/:id',insuranceController.getInsuranceById);
    app.put('/api/insurance',insuranceController.updateInsuranceById);
    app.delete('/api/insurance/:id',insuranceController.deleteInsuranceById);

    
    app.post('/api/vehicle', vehicleController.checkInsuranceExistance);

    //GEOCODE
    app.get('/api/division', geocodeController.getDivision);
    app.get('/api/district/:division_id', geocodeController.getDistrict);
    app.get('/api/upazila/:district_id', geocodeController.getUpazila);

    //REGISTRATION
    app.post('/api/registration',registrationController.createRegistration);
    //app.get('/api/registration',registrationController.getRegistration);
    app.get('/api/registration/:VehicleNumber',registrationController.getRegistrationByVehicleNumber);

    app.put('/api/update/personal',registrationController.updatePersonalInformationByVehicleNumber);
    app.put('/api/update/vehicle',registrationController.updateVehicleInformationByVehicleNumber);
    app.put('/api/update/insurance',registrationController.updateInsuranceInformationByVehicleNumber);
    app.put('/api/update/settings',registrationController.updateNotificationSettingByVehicleNumber);

    
}