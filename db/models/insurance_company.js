'use strict';
module.exports = (sequelize, DataTypes) => {
  const insurance_company = sequelize.define('insurance_company', {
    CompanyName: DataTypes.STRING,
    Phone: DataTypes.STRING,
    Email: DataTypes.STRING,
    Address: DataTypes.STRING
  }, {});
  insurance_company.associate = function(models) {
    // associations can be defined here
  };
  insurance_company.createCompany = function (data) {
    var model = {};
    if (data.CompanyName) model.CompanyName = data.CompanyName.trim();
    if (data.Phone) model.Phone = data.Phone.trim();
    if (data.Email) model.Email = data.Email.trim();
    if (data.Address) model.Address = data.Address.trim();
    return insurance_company.create(model);
};
insurance_company.getCompany = function () {
  return insurance_company.findAll();
};
insurance_company.getCompanyById = function (id) {
  return insurance_company.findByPk(id);
};
insurance_company.deleteCompanyById = function (id) {
  return insurance_company.destroy({
    where: {
      id:id
    }
  });
};
  return insurance_company;
};