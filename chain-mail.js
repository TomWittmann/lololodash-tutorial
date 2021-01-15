/**
 * The _.chain method lets you link several Lo-Dash methods together on a collection (arrays, objects) explicitly
 * and then finally returns the value of the whole operation.
 */

const _ = require("lodash");

var worker = function(arr) {
    return _.chain(arr)
        .sortBy()
        .map(function(item){
            return item.toUpperCase() + 'CHAINED';
        })
        .value(); 
};

module.exports = worker;