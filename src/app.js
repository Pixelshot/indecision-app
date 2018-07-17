import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css'; // Standardize CSS across all browsers. Section 8, Lecture 66.
import './styles/styles.scss'; // We don't need to set up a default when importing styles.

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// ========== REFERENCES AND CHALLENGES FOR INDECISION APP BEFORE BREAKING COMPONENTS INTO SMALLER FILES OF THEIR OWN ==========
// ===== Stateless Functional Component =====
// Stateless Functions have no access to 'this' keyword.
// Therefore unable to manage states.
// They do however have access to props.
// stating props as the first argument in the function will give access to it.
// See below for examples: 
//  - Notice there is no 'this' keyword in any of the Stateless Functional Component.
//  - props are given as first argument to access the constant's props.

// ====== Class Based Component =====

// class Header extends React.Component {
//     render() {
//        return (
//            <div>
//              <h1>{this.props.title}</h1>
//              <h2>{this.props.subtitle}</h2>
//            </div>
//        );
//     };
// };

// class Action extends React.Component {
    
//     render() {
//         return (
//             <div>
//                 <button 
//                     onClick={this.props.handlePick}
//                     disabled={!this.props.hasOptions}
//                 >
//                     What should I do?
//                 </button>
//             </div>
//         );
//     };
// };

// class Options extends React.Component {
    
//     // constructor(props) {
//     //     super(props);
//     //     this.handleRemoveAll = this.handleRemoveAll.bind(this); 
//     //     // In JavaScript, class methods are not bound by default.
//     //     // We will lose binding in a few places and eventListener is one of them.
//     //     // In order to maintain this, we call on .bind() and the best way/place to declare/call .bind() is in constructor.
//     //     // Generally, if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method. - Taken from Reactjs.org Doc.
//     // }

//     // handleRemoveAll() {
//     //     console.log(this.props.options);
//     // }

//     // Constructor(together with super and the rest) is no longer needed since function has been moved to Indecision App class.

//     render() {
//         return(
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 { this.props.options.map((option) => <Option key={option} optionText={option}/>) }
//                 {/* Because we've created handleDeleteOptions in IndecisionApp class, we call props on the function here. Remember props can only be transfered from parent to child and not the other way around. */}
//                 {/* If the normal ES6 Arrow syntax is being used, the return keyword is important, else it won't render */}
//                  {/* optionText is basically a props we create to give access to the option component */}
//             </div>
//         );
//     };
// };

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 <p>{this.props.optionText}</p>
//             </div>
//         );
//     };
// };

// Challenge for person(See person.js).
// ===== REFERENCE =====

// This will only give access to the file but not the functions or variables declined in the file.
// import './utils.js'

// This syntax provides access to the function/variable we want to access. Provided that the other file has created an export statement of the function/variable.
// import subtract, { square, add } from './utils.js'

// console.log('app.js is running and updating perfectly!');

// console.log(square(4));
// console.log(add(100, 23));
// console.log(subtract(100, 81));

// ===== END REFERENCE =====

// ===== REFERENCE 2 =====
// import validator from 'validator';
// import React from 'react';
// import ReactDOM from 'react-dom';

// console.log(validator.isEmail('test@mail.com')); 
// const template = <p>THIS IS JSX FROM WEBPACK</p>

// ReactDOM.render(template, document.getElementById('app'));

// ===== END REFERENCE 2 =====

// ===== CHALLENGES =====

// Challenge: Create two components; 
// Options -> Options component here.
// AddOption -> AddOption component here.
// Create Option component and render it inside of Options component.

// Challenge 2: 
// Setup options props for Options components.
// Render the length of the array.

// Challenge 3:
// // Render new p tag for each option (set text, set key).

// Challenge 4:
// Add Remove All button.
// Setup handleRemoveAll -> alert some message.
// setup onClick to fire that method.

// Challenge 5: 
// handlePick - pass down to Action and setup onClick - bind here
// randomly pick an option and alert it.

// Challenge 6:
// Setup form with text input and submit button.
// Wire up onSubmit.
// handleAddOption -> fetch the value typed -> if value, then alert(else do nothing).

// Challenge 7:
// Convert  class components(Header, Action, Options, Option).

// Challenge 8: 
// Convert setState statements into one line statement using arrow syntax.

// Challenge 9:
// import isSenior from './person.js'

// console.log(isSenior(65));
// console.log(isSenior(55));

// ===== END OF CHALLENGES =====

// ===== IMPORTING NODE MODULES(Gem in Rails) =====
// 3 Steps:
// install -> import -> use

// ===== METHOD CALLS =====
// import subtract, { isAdult, canDrink } from './person.js';

// console.log(subtract(100, 81));
// console.log(isAdult(18));
// console.log(isAdult(8));
// console.log(canDrink(22));
// console.log(canDrink(4));

// ===== END CALL =====