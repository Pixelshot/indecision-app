import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {

    // ===== Class Properties Syntax =====
    state = {
        options: [],
        selectedOption: undefined
    };
    
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };

    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }));
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const randomChoice = this.state.options[randomNum];
        // Challenge: use setState to set selectedOption instead of alert.
        // alert(randomChoice);
        this.setState(() => ({
            selectedOption: randomChoice
        }));
    };

    handleAddOption = (option) => {
        if (!option) {
            return 'Please enter a valid input'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Option is already in the list'
        }
        
        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    };

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
        
            if (options) {
            this.setState(() => ({ options }));
            // this conditional statement is to ensure that options is not null.
        }
            
        } catch (e) {
            // Do nothing.
        }

        // The try and catch method is something similar to byebug in ruby.
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            console.log('If you see this message, that means a state or a prop has been updated.');
            // This conditional statement is to ensure this method only saves data if the options array length has changed.
            // This is to prevent the method from saving redundant data.
            // See section 5, lecture 45 for more info on this.
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            // This is to save data into local storage.
            // It is based on a key/value pair.
            // The first argument('options') is the key and second argument(json) is the value.
            // Key can be used as reference in the browser. localStorage.getItem('options') to get the value(json).
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount only fires when an existing COMPONENT disappears')
    }

    render() {

        const subtitle = 'Put your life in the hands of a computer :)';

        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}    
                    />
                    <div className="widget">
                        <Options 
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption 
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    };
};

 // ===== Original Syntax =====
    // constructor(props) {
    //     super(props)
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    //     this.handlePick = this.handlePick.bind(this)
    //     this.handleAddOption = this.handleAddOption.bind(this)
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this)
    //     this.state = {
    //         options: [] 
    //         // Referencing IndecisionApp.defaultProps defined below.
    //         // Set the default value all the way down in ReactDOM.render(<IndecisionApp options={[in here]} />)
    //     }  
    // }

    // handleDeleteOptions() {
    //     // === Original Arrow Syntax ===

    //     // this.setState(() => {
    //     //     return {
    //     //         options: []
    //     //     };
    //     // });

    //     // === Single statement that returns an object using Arrow Syntax ===
    //     this.setState(() => ({ options: [] }));
    // }

    // handleDeleteOption(optionToRemove) {
    //     this.setState((prevState) => ({
    //         options: prevState.options.filter((option) => optionToRemove !== option)
    //     }));
    // }

    // handlePick() {
    //     const randomNum = Math.floor(Math.random() * this.state.options.length)
    //     const randomChoice = this.state.options[randomNum];
    //     alert(randomChoice);
    // }

    // handleAddOption(option) {
    //     if (!option) {
    //         return 'Please enter a valid input'
    //     } else if (this.state.options.indexOf(option) > -1) {
    //         return 'Option is already in the list'
    //     }
        
    //     // === Original ES6/Arrow Syntax ===
    //     // this.setState((prevState) => {
    //     //     return {
    //     //         options: prevState.options.concat(option)
    //     //     }
    //     // })

    //     // === Single Statement(shortcut) Syntax
    //     this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    // }

    //  ========== END SYNTAX ==========

    // ===== CHALLENGES =====
    // Challenge: 
    // pull the state out of constructor.
    // convert all 4 event handlers to class properties (arrow functions).
    // delete the constructor completely.
    // start with class properties and end with method.
    // ===== END OF CHALLENGES =====