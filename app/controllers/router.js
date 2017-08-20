const router = require("express").Router();
const ctrl = require("./main.js");

// Routing of the application :
router.get("/", function(req, res) {
  ctrl.index.listInfo().then(data => res.render("index", data));
});
router.get("/employees", function(req, res) {
  ctrl.employees.listCompanies().then(data => res.render("employees", data));
});
router.get("/employees/result", function(req, res) {
  ctrl.employees.listEmployees(req).then(data => res.render("employees", data));
});
router.get("/friends", function(req, res) {
  ctrl.friends.listPeople().then(data => res.render("friends", data));
});
router.get("/friends/result", function(req, res) {
  ctrl.friends.listFriends(req).then(data => res.render("friends", data));
});
router.get("/diet", function(req, res) {
  ctrl.diet.listPeople().then(data => res.render("diet", data));
});
router.get("/diet/result", function(req, res) {
  ctrl.diet.listDiet(req).then(data => res.render("diet", data));
});
router.get("/*", function(req, res) {
  res.render("404");
});

module.exports = router;
