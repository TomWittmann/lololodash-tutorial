const _ = require("lodash");

const worker = function(myList) {

    let underperform = [];
    let overperform = [];

    // Get average income.
    let average = _.reduce(myList, (acc, val, key, col) => {
        return parseInt(key) === myList.length - 1 ? (acc + val.income) / myList.length : acc + val.income;
    }, 0);

    _.forEach(myList, (val, key, col) => {
        if (val.income > average) {
            overperform.push(val);
        } else {
            underperform.push(val);
        }
    });

    underperform_sort = _.sortBy(underperform, o => o.income);
    overperform_sort = _.sortBy(overperform, o => o.income);

    return {
        average,
        underperform: underperform_sort,
        overperform: overperform_sort
    };

}

module.exports = worker;