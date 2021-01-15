/**
 * forEach function.
 * Unlike with sortBy, if callback is specified, it must be a function.
 * Like with sortBy it will be called as callback(value, index|key, collection).
 * 
 * This function iterates over elements of a collection, executing the callback on each element.
 */


const _ = require("lodash");

const worker = function(items) {
    return _.forEach(items, (item) => {
        console.log(item.population);
        if (item.population > 1) {
            item.size = "big";
        } else if (item.population < 1 && item.population > 0.5) {
            item.size = "med";
        } else {
            item.size = "small";
        }
    });
};

module.exports = worker;