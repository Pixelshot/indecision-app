class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options: props.options 
            // Referencing IndecisionApp.defaultProps defined below.
            // Set the default value all the way down in ReactDOM.render(<IndecisionApp options={[in here]} />)
        }  
    }

    handleDeleteOptions() {
        // === Original Arrow Syntax ===

        // this.setState(() => {
        //     return {
        //         options: []
        //     };
        // });

        // === Single statement that returns an object using Arrow Syntax ===
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(optionToRemove) {
        // this.setState((prevState) => ({
        //     options: prevState.options.filter((option) => optionToRemove !== option)
        // }));
        console.log('jkll', optionToRemove);
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const randomChoice = this.state.options[randomNum];
        alert(randomChoice);
    }

    handleAddOption(option) {
        if (!option) {
            return 'Please enter a valid input'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Option is already in the list'
        }
        
        // === Original ES6/Arrow Syntax ===
        // this.setState((prevState) => {
        //     return {
        //         options: prevState.options.concat(option)
        //     }
        // })

        // === Single Statement(shortcut) Syntax
        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }

    render() {

        const subtitle = 'Put your life in the hands of a computer :)';

        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}    
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    };
};

IndecisionApp.defaultProps = {
    options: []
}

// ===== Stateless Functional Component =====
// Stateless Functions have no access to 'this' keyword.
// Therefore unable to manage states.
// They do however have access to props.
// stating props as the first argument in the function will give access to it.
// See below for examples: 
//  - Notice there is no 'this' keyword in any of the Stateless Functional Component.
//  - props are given as first argument to access the constant's props.

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision App'
}

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick} 
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
                { 
                props.options.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                )) }   
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            {/* <p>{props.optionText}</p> */}
            <button 
            // How to target and manipulate the option we've chosen from the list.
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText)
            }}
            >
                Remove
            </button>
        </div>
    );
};

class AddOption extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }
    
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim(); 
    // Returns what ever that has been written in the form.
    // .trim() removes whitespace from both ends of a string.
    // Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).
        const error = this.props.handleAddOption(option);

        // === Original ES6/Arrow Syntax ===
        // this.setState(() => {
        //     return { error }
        // });

        // === Single Statement(shortcut) Syntax
        this.setState(() => ({ error }));
    }
    render() {
        return (
            <div>
                { this.state.error && <p>{this.state.error}</p> }
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option'></input>
                    <button>Submit</button>
                </form>
            </div>
        );
    };
};

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

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