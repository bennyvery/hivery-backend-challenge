"use strict";
const assert = require("assert");
const utilities = require("../app/models/utilities.js");

describe("utilities", function() {
  describe("#intersect", function() {
    it("[{ index: 1 }, { index: 4 }, { index: 7 }] and [{ index: 4 }, { index: 5 }, { index: 7 }, { index: 9 }] should return [4,7]", function() {
      const a = [{ index: 1 }, { index: 4 }, { index: 7 }];
      const b = [{ index: 4 }, { index: 5 }, { index: 7 }, { index: 9 }];
      assert.deepEqual([4, 7], utilities.intersect(a, b));
    });
    it("[{ index: 1 }, { index: 4 }, { index: 7 }] and [{ index: 2 }, { index: 3 }] should return []", function() {
      const a = [{ index: 1 }, { index: 4 }, { index: 7 }];
      const b = [{ index: 2 }, { index: 3 }];
      assert.deepEqual([], utilities.intersect(a, b));
    });
    it("[] and [] should return []", function() {
      const a = [];
      const b = [];
      assert.deepEqual([], utilities.intersect(a, b));
    });
  });
});
