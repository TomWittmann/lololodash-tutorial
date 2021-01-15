const _ = require("lodash");

const worker = function (myList) {

     // Here, item is each thing being iterated over.
     // The minus is to make it go the opposite direction.
    return _.sortBy(myList, function(item) {
        return -item.quantity;
    })

    // return _.sortBy(myList, 'quantity').reverse();
    // return _.sortBy(myList, item => item.quantity)

}

module.exports = worker;