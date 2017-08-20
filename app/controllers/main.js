const indexCtrl = require("./index.js");
const employeesCtrl = require("./employees.js");
const friendsCtrl = require("./friends.js");
const dietCtrl = require("./diet.js");

const mainCtrl = {
  index: indexCtrl,
  employees: employeesCtrl,
  friends: friendsCtrl,
  diet: dietCtrl
};

module.exports = mainCtrl;
