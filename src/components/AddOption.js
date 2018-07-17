import React from 'react';

export default class AddOption extends React.Component {

    // ===== New Syntax(Class properties) =====
    state = {
        error: undefined
    }

    handleAddOption = (e) => {
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

        if (!error) {
            e.target.elements.option.value = '';
        }
        // This is to clear the input field if there are no errors.
    };
    
    render() {
        return (
            <div>
                { this.state.error && <p className="add-option-error">{this.state.error}</p> }
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type='text' name='option'></input>
                    <button className="button">Submit</button>
                </form>
            </div>
        );
    };
};

// ===== Old Syntax(Without class properties) Section 6 Lecture 58. =====

    // constructor(props) {
    //     super(props);
    //     this.handleAddOption = this.handleAddOption.bind(this)
    //     this.state = {
    //         error: undefined
    //     } 
    // }
    
    // handleAddOption(e) {
    //     e.preventDefault();
    //     const option = e.target.elements.option.value.trim(); 
    // // Returns what ever that has been written in the form.
    // // .trim() removes whitespace from both ends of a string.
    // // Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).
    //     const error = this.props.handleAddOption(option);

    //     // === Original ES6/Arrow Syntax ===
    //     // this.setState(() => {
    //     //     return { error }
    //     // });

    //     // === Single Statement(shortcut) Syntax
    //     this.setState(() => ({ error }));

    //     if (!error) {
    //         e.target.elements.option.value = '';
    //     }
    //     // This is to clear the input field if there are no errors.
    // }

    // ========== END OF SYNTAX ==========