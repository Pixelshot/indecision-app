import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button 
                className="button button--link"
                onClick={props.handleDeleteOptions}
            >
                Remove All
            </button>
        </div>
        {/* JSX Statement below is to check if there is a data inserted and if not a simple message to remind the user to do so to begin. */}
        {props.options.length === 0 && <p className="widget__message">Please add an option to get started</p>}
            { 
            props.options.map((option, index) => (
                <Option 
                    key={option} 
                    optionText={option}
                    count={index + 1} // This will create an ordered list.
                    handleDeleteOption={props.handleDeleteOption}
                />
            )) }   
    </div>
);

export default Options;