'use strict';
const db = require("../../db/models/index");

function Registration() {
    this.createRegistration = async (req) => {
        const data = {  ...req.body };
        db.personal_information.createPersonalInformation(data);
        db.vehicle_information.createVehicleInformation(data);
        db.insurance_information.createInsuranceInformation(data)
        return db.notification_setting.createNotificationSettings(data);

    };
    this.getRegistrationByVehicleNumber = async (VehicleNumber) => {
        return db.personal_information.getRegistrationByVehicleNumber(VehicleNumber); //return join data
    };
    this.updatePersonalInformationByVehicleNumber = async (req) => {
        const data = { ...req.body  };
        return db.personal_information.updatePersonalInformationByVehicleNumber(data);
    };

    this.updateVehicleInformationByVehicleNumber = async (req) => {
        const data = { ...req.body  };
        return db.personal_information.updateVehicleInformationByVehicleNumber(data);
    };

    this.updateInsuranceInformationByVehicleNumber = async (req) => {
        const data = { ...req.body  };
        return db.personal_information.updateInsuranceInformationByVehicleNumber(data);
    };

    this.updateNotificationSettingByVehicleNumber = async (req) => {
        const data = { ...req.body  };
        return db.personal_information.updateNotificationSettingByVehicleNumber(data);
    };
}

module.exports = Registration;