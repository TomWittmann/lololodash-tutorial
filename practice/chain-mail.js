const _ = require("lodash");

const worker = function (myList) {
    // _.chain creates a lodash object that wraps value with explicit method chaining enabled.
    
    return _.chain(myList)
    .sortBy()
    .map(item => item.toUpperCase() + "CHAINED");
        
}

module.exports = worker;