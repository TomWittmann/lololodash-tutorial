const _ = require("lodash");

const worker = function(myList) {
    const articles = _.groupBy(myList, 'article');

    // console.log(articles);
    let myOutput = [];
    
    _.forEach(articles, function(val, key, col) {

        let sum = _.reduce(val, function(acc, val2, key2, col2) {
            return acc + val2.quantity;
        }, 0);

        console.log(sum);
        
    })
}

module.exports = worker;