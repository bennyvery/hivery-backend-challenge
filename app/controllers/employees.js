const peopleModel = require("../models/people.js");
const companiesModel = require("../models/companies.js");
const utilities = require("../models/utilities.js");
const { getEmployeesFromCompany } = peopleModel;
const { getAllCompanies, getOneCompany } = companiesModel;

const employeesController = {
  listCompanies: async function() {
    const companies = await getAllCompanies();
    return { result: null, companies: companies };
  },

  listEmployees: async function(req) {
    const companyName = req.query.company;
    const [companies, employees] = await Promise.all([
      getAllCompanies(),
      getOneCompany(companyName)
        .then(company => getEmployeesFromCompany(company.index))
        .catch(err => utilities.errorHandler(err))
    ]);
    return { result: employees, companies: companies };
  }
};

module.exports = employeesController;
