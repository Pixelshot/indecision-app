// Challenge 1: 
// named export isAdult(18) - true if adult otherwise false.
// named export canDrink(18) - true if 21 and over otherwise false.

// import isAdult and canDrink inside person.js
// use both printing result to the console.
console.log('person is running.');

// ===== SOLUTION =====
// const isAdult = (age) => age >= 18;
// const canDrink = (age) => age >= 21;

// ===== My Answer =====
// const isAdult = (age) => {
//     if(age >= 18) {
//         return true
//     } else {
//         return false
//     };
// };

// const canDrink = (age) => {
//     if(age >= 21) {
//         return true
//     } else {
//         return false
//     };
// };
// ===== END Answer =====

// export { isAdult, canDrink };

// ===== END CHALLENGE 1 =====

// Challenge 2:
// default export isSenior(65) - return true if senior otherwise false.
// Grab the default in app.js and call it.

const isSenior = (age) => age >= 65;

export default isSenior