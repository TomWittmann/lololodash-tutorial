const _ = require("lodash");

const worker = function (comments) {

    var counted = [];

    // Group by username
    comments = _.groupBy(comments, "username");

    console.log("COMMENTS\n" + comments);

    _.forEach(comments, function (item, name) {

        console.log("NAME:\n" + name);
        console.log("ITEM:\n" + item);
        counted.push({
            username: name,
            comment_count: _.size(item)
        });
    });

    return _.sortBy(counted, "comment_count").reverse();
};

module.exports = worker;