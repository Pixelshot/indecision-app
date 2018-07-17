// console.log('app.js is running!');

// JSX - JavaScript XML

// Challenge 1
// create app object title/subtitle
// use title/subtitle in the template
// render template

// Challenge 2
// Only render the subtitle(and p tag) if subtitle exist - logical && operator
// render new p tag - if options.length > 0 "Here are your options" : "No options"
const app = {
    title: 'Indecision App',
    subtitle: 'The fate of your decision lies in the hands of a computer',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault() 
    // preventDefault() will prevent the whole page on reloading Instead only on the element that we want to update/refresh.
    
    const option = e.target.elements.option.value; 
    // Returns what ever that has been written in the form.
    
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    };
    // The if statement is to check if there is any string submitted. If there is none, nothing will be returned(by default, empty string is still considered as a legit submit and will return an empty space.)
};

// Challenge
// Create a "Remove All" button above list
// on click -> wipe the array -> rerender
const removeAll = () => {
    app.options = [];
    renderApp();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

const appRoot = document.getElementById('app');

const renderApp = () => { 
    const template = (
        <div>
            <h1>{app.title}</h1> 
            { app.subtitle && <p>{app.subtitle}</p> }
            <p>{ app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What shoud I do?</button>
            {/* button disabled is used to prevent user from having access to the button if the list has 0 item */}
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {/* map over app.options getting back an array of lists(set key and text) */}
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}> 
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};
// Challenge 3
// Create render function that renders the new JSX
// Call it right away
// Call it after options array added to

renderApp();