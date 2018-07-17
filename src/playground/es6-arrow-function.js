// ES5 Syntax
function square(x) {
    return x * x;
}

console.log(square(3));

// ES6 Syntax

const squareArrow = (x) => {
    return x * x;
}

console.log(squareArrow(8));

// Single Expression Syntax for ES6

const singleSquareArrow = (x) => x * x;

console.log(singleSquareArrow(9));

// Challenge - use arrow functions
// getFirstName('Mike Smith') -> 'Mike'
// Create regular arrow function
// Create arrow function using shorthand syntax

const fullName = "Mike Smith";

// function getFirstName() {
//     fullName.split(' ')[0];
// }

// Using regular arrow syntax
// const getFirstName = () => {
//     console.log(fullName.split(' ')[0]);
// }

// Using shorthand syntax
// const getFirstNameExpression = () => console.log(fullName.split(' ')[0]);

// =====  Andrew's Solution  =====

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}

const getFirstNameExpression = (fullName) => fullName.split(' ')[0]; 

console.log(getFirstName('Mike Smith'));
console.log(getFirstNameExpression('Mike Smith'));