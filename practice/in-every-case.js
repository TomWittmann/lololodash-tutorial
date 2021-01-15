const _ = require("lodash");

const worker = function(myList) {
    /**
     * Callback function(value, key|index, collection).
     * value is the current value being iterated over, key is the key/index, and colleciton
     * is the original data source being iterated over.
     * 
     * In nested objects the value will be the nested object and the key will be the key for
     * that nested object.
     */
    
    return _.forEach(myList, function(val, key, col) {
        if (val.population > 1) {
            val.size = 'big'
        } else if (val.population < 1 && val.population > 0.5) {
            val.size = 'med'
        } else {
            val.size = 'small'
        }
    });

}

module.exports = worker;