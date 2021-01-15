/**
 * A colleciton can be thought of as a key value store that keeps track of the data you add to it and
 * has some basic functions to add and remove data.
 */

const _ = require("lodash");

const worker = function(myList) {
    /**
     * collection - collection to iterate over
     * predicate - function invoked per iteration.
     * 
     * You don't have to use a function because it has pre configured functions like _.match
     * that create a function or _.property.
     * 
     * For example, property does not need to be here for it to work.
     */
    return _.filter(myList, _.property('active'));
}

module.exports = worker;