const _ = require("lodash");

const worker = function(myList) {
    // Contain objects with the key name.
    const users = _.groupBy(myList, 'username');

    const myOutput = [];
    
    _.forEach(users, function(val, key, col) {
        myOutput.push( {
            username: key,
            comment_count: _.size(val)
        });
    });
    return _.sortBy(myOutput, "comment_count").reverse();
};

module.exports = worker;