const _ = require("underscore");

const utilities = {
  intersect: function(array1, array2) {
    return _(array1)
      .chain()
      .map(function(ea) {
        return _.find(array2, function(eb) {
          return ea.index == eb.index;
        });
      })
      .compact()
      .value()
      .map(element => {
        return element.index;
      });
  },
  errorHandler: function(err) {
    switch (err.name) {
      case "TypeError":
        return "Unknown Request";
    }
  }
};

module.exports = utilities;
