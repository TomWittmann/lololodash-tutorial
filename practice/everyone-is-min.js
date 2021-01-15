const _ = require("lodash");

const worker = function(myList) {
    let hot = [];
    let warm = [];
    _.forEach(myList, function(val, key, col) {
        if (_.every(val, temp => temp > 19)) {
            hot.push(key);
        } else if (_.some(val, temp => temp > 19)) {
            warm.push(key);
        }
    });
    return {
        hot,
        warm
    };
}

module.exports = worker;