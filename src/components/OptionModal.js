import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        // true will cause the 'ajax' to show up.
        onRequestClose={props.handleClearSelectedOption}
        // onRequestClose checks if we've pressed the ESC button or pressed anywhere else on the browser for it to close the current modal(ajax).
        contentLabel="Selected Option"
        // For more info on modal, see section 7, lecture 61.
        closeTimeoutMS={200}
        // This React method lets us set the amount of time we want to wait before removing the div from the DOM.
        // Comes in handy when we want to use the fade out effect on an element.
        className="modal"
    >
        <h3 className="modal__title">Selected Option.</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        {/* Conditional rendering to show <p> tag only when there's value for selected option. */}
        <button className="button" onClick={props.handleClearSelectedOption}>Okay</button>
    </Modal>
);

export default OptionModal;

// Challenge: 
// Create a new event handler in IndecisionApp that clears selectedOption state.
// Pass that into OptionModal.
// Call it on button.