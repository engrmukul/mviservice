'use strict';
const db = require("../../db/models/index");

function Registration() {
    this.createRegistration = async (req) => {
        const data = {  ...req.body };
        db.vehicle.createVehicle(data);
        db.personal_information.createPersonalInformation(data);
        db.vehicle_information.createVehicleInformation(data);
        db.insurance_information.createInsuranceInformation(data)
        return db.notification_setting.createNotificationSettings(data);

    };
    this.getRegistrationByVehicleNumber = async (VehicleNumber) => {
        var reg = {}
        reg.personal  = await db.personal_information.getPersonalInformationByVehicleNumber(VehicleNumber);
        reg.vehicle   = await db.vehicle_information.getVehicleInformationByVehicleNumber(VehicleNumber);
        reg.insurance = await db.insurance_information.getInsuranceInformationByVehicleNumber(VehicleNumber);
        reg.settings  = await db.notification_setting.getNotificationSettingByVehicleNumber(VehicleNumber);
        return reg;
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