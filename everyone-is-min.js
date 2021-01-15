/**
 * Every and some check to see if the given callback returns true for all of the elements and any
 * of the elements of the collection object, respectively.
 * 
 * The some function returns as soon as it finds a passing value before finishing its iteration.
 * 
 */

// Warm towns with at least one day with a temp > 19
// Hot towns have every day with a temp > 19

const _ = require("lodash");

const worker = function (myList) {
    let hot = [];
    let warm = [];
    Object.keys(myList).forEach((key) => {
        let cityTemps = myList[key];
        if (_.every(cityTemps, (item) => item > 19)) {
            hot.push(key);
        } else if (_.some(cityTemps, (item) => item > 19)) {
            warm.push(key);
        }
    });

    return {hot, warm};
};

module.exports = worker;