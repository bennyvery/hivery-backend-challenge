"use strict";
const assert = require("assert");
const supertest = require("supertest");
const express = require("express");
var expect = require("chai").expect;
const path = require("path");

const db = require("../app/models/db");
const app = express();
const router = require("../app/controllers/router.js");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../app/views/layouts"));
app.use(express.static(path.join(__dirname, "../app/views/static")));
app.use("/", router);

// Connect to Mongo on start
db.connect("mongodb://localhost:27017/paranuara", function(err) {
  if (err) {
    console.log("Unable to connect to Mongo.", err);
    process.exit(1);
  } else {
    app.listen(3333, function() {
      // console.log("Listening on port 3333...");
    });
  }
});

// const request = supertest(app);

// describe("router", function() {
//   describe("#GET/friends", function() {
//     it("should respond with friends", function(done) {
//       request.get("/").expect(200, function(err, res) {
//         expect(res.body).to.equal("friends");
//         done();
//       });
//     });
//   });
// });
