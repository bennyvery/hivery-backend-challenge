"use strict";
const assert = require("assert");
const companiesModel = require("../app/models/companies.js");

describe("models", function() {
  describe("#getAllCompanies", function() {
    it("should return all the companies", function() {
      companiesModel.getAllCompanies().then(data => {
        assert.equal(100, data.length);
      });
    });
  });
  describe("#getOneCompany", function() {
    it("should return the company requested", function() {
      companiesModel.getOneCompany("ZENTRY").then(data => {
        assert.equal(18, data.index);
      });
    });
  });
  describe("#getCompanyFromId", function() {
    it("should return the company requested", function() {
      companiesModel.getCompanyFromId(18).then(data => {
        assert.equal("ZENTRY", data.company);
      });
    });
  });
});
