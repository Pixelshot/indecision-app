import React from 'react';

const Option = (props) => (
    <div className="option">
        <p className="option__text">{props.count}. {props.optionText}</p>
        <button 
        // How to target and manipulate the option we've chosen from the list.
            className="button button--link"
            onClick={(e) => {
                props.handleDeleteOption(props.optionText)
        }}
        >
            Remove
        </button>
    </div>
);
export default Option;