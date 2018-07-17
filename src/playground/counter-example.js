// Challenge:
// Create three methods: handleAddOne, handleMinusOne, handleReset
// Use console.log() to print method name
// Write up onClick and bind in the constructor

// Challenge 2:
// Call this.setState decrement the count by 1.

// Challenge 3:
// Set up defaultProps value for count: 0.

// Challenge 4:
// Create lifecycle methods to store data locally.

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10);

        if (!isNaN(count)) {
            this.setState(() => ({ count }));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1 
                // return with '()' returns multi-line JSX elements whilst '{}' is used to return an object literal.
            };
        })
    };
    // prevState is just a placeholder for current state value.
    // By convention it's usually called prevState but technically we can call it anything we want.
    // In the case of prevState, React provides the value for you by grabbing previous state object and supplies it as argument to the callback function for this.setState
    
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        })
    };

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    };

    render() {
        return (
            <div>
                <h1>Count:{this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
};

ReactDOM.render(<Counter />, document.getElementById('app'));


// ========== REFERENCE ==========
// let count = 0;
// const addOne = () => {
//     console.log('addOne')
// };
// const minusOne = () => {
//     console.log('minusOne')
// };
// const reset = () => {
//     console.log('reset');
// };

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();