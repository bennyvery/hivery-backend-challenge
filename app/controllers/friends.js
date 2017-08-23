const utilities = require("../models/utilities.js");
const peopleModel = require("../models/people.js");
const { getExampleOfPeople, getOnePerson, getFriendsAliveAndBrown } = peopleModel;

const friendsController = {
  listPeople: async function() {
    const people = await getExampleOfPeople();
    return { people: people, result: null };
  },

  listFriends: async function(req) {
    const firstName = req.query.first;
    const secondName = req.query.second;
    const [people, firstPerson, secondPerson] = await Promise.all([
      getExampleOfPeople(),
      getOnePerson(firstName),
      getOnePerson(secondName)
    ]);
    if (firstPerson === null || secondPerson === null)
      return { people: people, error: "Unknown Request" };
    const mutualFriends = utilities.intersect(
      firstPerson.friends,
      secondPerson.friends
    );
    const friends = await getFriendsAliveAndBrown(mutualFriends);
    return { people: people, result: friends };
  }
};

module.exports = friendsController;
