// Challenge:
// VisibilityToggle - render, constructor, handleToggleVisibility
// visibility -> false

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
        this.app = {
            title: 'Visibility Title',
            details: 'Congratulations, you\'ve\ unlocked this statement.'
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return { 
                visibility: !prevState.visibility 
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.app.title}</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                {this.state.visibility && (
                    <div>
                       <p>{this.app.details}</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const app = {
//     title: 'Visibility Toggle',
//     details: 'These are the details you were looking for.'
// }

// let visibility = false;

// const showHide = () => {
//    visibility = !visibility;
//    renderApp();
// }

// const renderApp = () => {
//     const template = (
//             <div>
//                 <h1>{app.title}</h1>
//                 <button onClick={showHide}>{visibility ? 'Hide details' : 'Show details'}</button>
//                 {visibility && 
//                     <div>
//                         <p>{app.details}</p>
//                     </div>
//                 }
//             </div>
//         );
//     ReactDOM.render(template, document.getElementById('app'));
// };

// renderApp();