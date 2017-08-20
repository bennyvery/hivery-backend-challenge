const peopleModel = require("../models/people.js");
const companyModel = require("../models/companies.js");
const { getPopulation, getAllAges } = peopleModel;
const { getTotalCompanies, getBiggestCompany, getCompanyFromId } = companyModel;

const indexController = {
  listInfo: async function() {
    const [population, companies, ages, company] = await Promise.all([
      getPopulation(),
      getTotalCompanies(),
      getAllAges(),
      getBiggestCompany()
    ]);
    const biggestCompany = await getCompanyFromId(company[0]._id);
    const [females, males] = [population[0].total, population[1].total];
    const total = females + males;
    return {
      population: total,
      males: (males / total * 100).toFixed(2),
      females: (females / total * 100).toFixed(2),
      companies: companies,
      age: Math.round(ages[0].sum / total),
      biggestCompany: biggestCompany.company
    };
  }
};

module.exports = indexController;
