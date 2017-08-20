"use strict";

const express = require("express");
const path = require("path");
const db = require("./app/models/db");
const router = require("./app/controllers/router.js");

// Starts an instance of express server
const app = express();

// This application uses EJS as render engine in order to load HTML
app.set("view engine", "ejs");
// This sets the path to the views
app.set("views", path.join(__dirname, "app/views/layouts"));
// This sets the path to the static files
app.use(express.static(path.join(__dirname, "app/views/static")));
// This sets the path to the router
app.use("/", router);

// Connect to Mongo on start
db.connect("mongodb://localhost:27017/paranuara", function(err) {
  if (err) {
    console.log("Unable to connect to Mongo.", err);
    process.exit(1);
  } else {
    app.listen(3333, function() {
      console.log("Listening on port 3333...");
    });
  }
});
