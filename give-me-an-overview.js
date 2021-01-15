const { toInteger } = require("lodash");
const _ = require("lodash");

const worker = function(myList) {
    let myArray = [];
    // Make an object where the keys are the article and the value is an array of each article.
    const articles = _.groupBy(myList, 'article');
    // Value is the object {article: 2323, quantity: 4} currently being iterated on.
    // Key is the index so 0 for the first, 1 for the second etc.
    // myList is the array of objects passed in to the function.
    _.forEach(articles, (value, key) => {
        // item is the current object.
        // Key is the most recent key.
        // val is the most recent value.
        // value is also the object.
        let sum = _.reduce(value, function(total_quantity, val, key, item) {
            return total_quantity += val.quantity;
        }, 0);
        myArray.push({
            article: toInteger(key),
            total_orders: sum
        });
    });
    return _.sortBy(myArray, 'total_orders').reverse();
}

module.exports = worker;