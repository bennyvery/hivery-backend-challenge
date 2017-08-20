const peopleModel = require("../models/people.js");
const foodModel = require("../models/food.js");
const { getAllPeople, getOnePerson } = peopleModel;
const { getFruitFromFood, getVegetablesFromFood } = foodModel;

const dietController = {
  listPeople: async function() {
    const people = await getAllPeople();
    return { people: people };
  },

  listDiet: async function(req) {
    const personName = req.query.name;
    const [people, person] = await Promise.all([
      getAllPeople(),
      getOnePerson(personName)
    ]);
    if (person === null) return { people: people, error: "Unknown Request" };
    const [fruit, vegetables] = await Promise.all([
      getFruitFromFood(person.favouriteFood),
      getVegetablesFromFood(person.favouriteFood)
    ]);
    return {
      people: people,
      person: person,
      diet: { fruit: fruit, vegetables: vegetables }
    };
  }
};

module.exports = dietController;
