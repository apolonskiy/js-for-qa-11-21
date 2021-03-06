
/*
Ex 1 Create array, called it Post which should contains any:
- numeric value,
- boolean value,
- string value,
- undefined,
- function with some console.log,
- array of objects
Each value should have different array index

Ex 1.1
Based on previously created arrray:
- Get the first and last array value
- Get value of the function by array index and log value
- Get value of "array of objects" by array index and log value
*/


// Exercise 1
// Write a function which should return sum of all numbers inside array
const numbers = [1, -1, 2, 3];

function sum(numbers) {
 // numbers
}

console.log(sum(numbers)); // 5

// Exercise 2
// When you run arrayFromRange function should dispayd numbers from min to max 
// Also this function should accept negative numbers
function arrayFromRange(min, max) {
    // your code
}

const numbers = arrayFromRange(1, 4);

console.log(numbers); // Should display [1, 2, 3, 4]

const negativeNumbers = arrayFromRange(-10, -8);
console.log(negativeNumbers); // Should display [-10, -9, -8]


// Exercise 3
// Need to create function which display the max number from the array
const numbers = [1, 2, 3, 4, 5];

const maxNumber = getMax(numbers);

console.log(maxNumber()) // should display max number from the array 5

function getMax([]) {
    // your code
}


// Exercise 4

let movies = [
    {title: 'a', year: 2019, rating: 4.7},
    {title: 'b', year: 2018, rating: 4.4},
    {title: 'c', year: 2019, rating: 4.3},
    {title: 'd', year: 2019, rating: 3.9},
]

// Ruturn all movies in 2019 with rating > 4
// Sort them by their rating in descending order
// Pick their title 'a', 'b' ...
// So, the result should be ["a", "c"] 

// EX5
const arr = [1,2,3,4,1,4,5,21234,214,23,45,12,11,1,4,0,3,2,11,1];
// count number of 1 in array, using only
// 5.1 ONLY indexOf() method (also can use loop)
//5.2 filter() and Length
// 5.3 map() and length.
//5.4 NEW RULE: find out if there is 0 in this array using includes()

// EX6
let users = [
    { id: 1, name: "John", age: 43 }, // same age
    { id: 2, name: "Pete", age: 43 },
    { id: 3, name: "Mary", age: 37 }
];
// Find out if users array has user with age 37 in it using
// 6.1 using find()
// 6.2 using map() and length
// 6.3 using filter and length
// 6.4 using some()

// ex7
const arrStr = ['one, two, trhee', 'four, five', 'seven, six'];
//  write a function which will return new array with all numbers (srings) as separate elements of atta
// expected ['one', 'two',...]
// next, create second function, pass there result of function above and create ONE STRING, 
// comma-separated with all the elements of array in it.

