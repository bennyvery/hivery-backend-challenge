const db = require("../models/db.js");

const foodModel = {
  getFruitFromFood: function(food) {
    return db
      .get()
      .collection("food")
      .find({
        name: { $in: food },
        type: "fruit"
      })
      .toArray();
  },
  getVegetablesFromFood: function(food) {
    return db
      .get()
      .collection("food")
      .find({
        name: { $in: food },
        type: "vegetable"
      })
      .toArray();
  }
};

module.exports = foodModel;
