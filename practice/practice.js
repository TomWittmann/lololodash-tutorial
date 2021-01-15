const _ = require("lodash");

let myArray = [1, 2, 78, 4, 51, 10, 15, 6];

let myObject = [{ name: 'Tom', age: 26 },
                { name: 'Greg', age: 26},
                {name: 'Sabin', age: 25}

];

let newArray = _.forEach(myArray, function(num, index, myColl) {
    console.log(num);
    console.log(index);
    console.log(myColl);
    return num;
});

console.log(newArray);

let newObject = _.forEach(myObject, function (num, index, myColl) {
    console.log(num);
    console.log(index);
    console.log(myColl);
});

console.log(newObject);