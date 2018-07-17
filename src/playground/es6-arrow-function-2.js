// arguments object - no longer bound with arrow functions. Trying to access it will no longer work.

// ES5 Syntax
// const add = function(a, b) {
//     console.log(arguments); // This will give access to all arguments
//     return a + b;
// }
// console.log(add(55, 1, 150));

// ES6 Syntax
// const addNew = (a, b) => {
//     console.log(arguments); // This will only give access to defined arguments and will throw an error.
//     return a + b;
// }
// this keyword - also no longer bound with arrow functions.

const user = {
    name: 'Bruce Wayne',
    cities: ['Gotham City', 'Metropolis', 'Star City'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
        }
    };
console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
// numbers - array of number
// multiplyBy - single number
// multiply - return a new array where the numbers have been multiplied

    numbers: [1, 2, 3, 4, 5],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};
console.log(multiplier.multiply());