const db = require("../models/db.js");

const peopleModel = {
  getExampleOfPeople: function() {
    return db.get().collection("people").find().limit(50).toArray();
  },
  getOnePerson: function(name) {
    return db.get().collection("people").findOne({ name: name });
  },
  getEmployeesFromCompany: function(company) {
    return db
      .get()
      .collection("people")
      .find({ company_id: company })
      .toArray();
  },
  getFriendsAliveAndBrown: function(friends) {
    return db
      .get()
      .collection("people")
      .find({
        index: { $in: friends },
        eyeColor: "brown",
        has_died: false
      })
      .toArray();
  },
  getPopulation: function() {
    return db
      .get()
      .collection("people")
      .aggregate([
        {
          $match: { has_died: false }
        },
        {
          $group: { _id: "$gender", total: { $sum: 1 } }
        }
      ])
      .toArray();
  },
  getAllAges: function() {
    return db
      .get()
      .collection("people")
      .aggregate([
        { $match: { has_died: false } },
        {
          $group: {
            _id: null,
            sum: { $sum: "$age" }
          }
        }
      ])
      .toArray();
  }
};

module.exports = peopleModel;
