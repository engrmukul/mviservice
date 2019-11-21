'use strict';
const db = require("../../db/models/index");

function Registration() {
    this.createRegistration = async (req) => {

        if (req.files || Object.keys(req.files).length > 0) {
            var startup_image = req.files.UploadPicture;
            startup_image.mv('public/uploads/images/' + startup_image.name, function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("uploaded");
                }
            });
        }

        const data = { ...req.body };
        data.UploadPicture = startup_image.name;
        db.vehicle.createVehicle(data);
        db.personal_information.createPersonalInformation(data);
        db.vehicle_information.createVehicleInformation(data);
        db.insurance_information.createInsuranceInformation(data)
        return db.notification_setting.createNotificationSettings(data);

    };
    this.getRegistrationByVehicleNumber = async (VehicleNumber) => {
        var reg = {}
        reg.personal = await db.personal_information.getPersonalInformationByVehicleNumber(VehicleNumber);
        reg.vehicle = await db.vehicle_information.getVehicleInformationByVehicleNumber(VehicleNumber);
        reg.insurance = await db.insurance_information.getInsuranceInformationByVehicleNumber(VehicleNumber);
        reg.settings = await db.notification_setting.getNotificationSettingByVehicleNumber(VehicleNumber);
        return reg;
    };
    this.updatePersonalInformationByVehicleNumber = async (req) => {
        // if (req.files || Object.keys(req.files).length > 0) {
        //     var startup_image = req.files.UploadPicture;
        //     startup_image.mv('public/uploads/images/' + startup_image.name, function (err) {
        //         if (err) {
        //             console.log(err);
        //         } else {
        //             const path = 'public/uploads/images/' + startup_image.name;

        //             fs.unlink(path, (err) => {
        //                 if (err) {
        //                     console.error(err)
        //                 }
        //             })
        //             console.log("uploaded");
        //         }
        //     });
        // }
        const data = { ...req.body };
        //data.UploadPicture = startup_image.name;
        return db.personal_information.updatePersonalInformationByVehicleNumber(data);
    };

    this.updateVehicleInformationByVehicleNumber = async (req) => {
        const data = { ...req.body };
        return db.vehicle_information.updateVehicleInformationByVehicleNumber(data);
    };

    this.updateInsuranceInformationByVehicleNumber = async (req) => {
        const data = { ...req.body };
        return db.insurance_information.updateInsuranceInformationByVehicleNumber(data);
    };

    this.updateNotificationSettingByVehicleNumber = async (req) => {
        const data = { ...req.body };
        return db.notification_setting.updateNotificationSettingByVehicleNumber(data);
    };
}

module.exports = Registration;