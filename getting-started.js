/**
 * Lo-Dash is a JavaScript library that gives you lots of help when working with Arrays, JSON, and JavaScript objects.
 * Lo-Dash can be used with node.js in the back end and JavaScript in the front end.
 */

 // Filter filters a collection using the condition defined by props.
 // The collection could be anything: an Array, JSON data, or a JavaScript object.

const _ = require("lodash");

// Returns an array of all elements the predicate (second argument) returns truthy for.
 const worker = function(myList) {
    return _.filter(myList, {active: true});
 };

 module.exports = worker;