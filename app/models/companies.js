const db = require("../models/db.js");

const companiesModel = {
  getAllCompanies: function() {
    return db.get().collection("companies").find().toArray();
  },
  getOneCompany: function(name) {
    return db.get().collection("companies").findOne({ company: name });
  },
  getCompanyFromId: function(id) {
    return db.get().collection("companies").findOne({ index: id });
  },
  getTotalCompanies: function() {
    return db.get().collection("companies").find().count();
  },
  getBiggestCompany: function() {
    return db
      .get()
      .collection("people")
      .aggregate([
        {
          $group: { _id: "$company_id", count: { $sum: 1 } }
        },
        {
          $sort: { count: -1 }
        },
        {
          $limit: 1
        }
      ])
      .toArray();
  }
};

module.exports = companiesModel;
