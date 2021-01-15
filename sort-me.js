/**
 * The sortBy function sorts the collection object using the callback each iteration.
 * 
 * If callback is a function, it will be called as callback(value, index|key, collection).
 * 
 * sortBy will always sort ascendingly, from smallest to largest.
 * 
 * It returns the new sorted array.
 * 
 */

const _ = require("lodash");

const worker = function(items) {
    return _.sortBy(items, 'quantity').reverse();
};

module.exports = worker;