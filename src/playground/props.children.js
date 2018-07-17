const Layout = (props) => {
    return(
        <div>
            <p>Header</p>
            { props.children }
            {/* props.children is a built in function by React. */}
            {/* For more info, see Section 7, Lecture 60. */}
            <p>Footer</p>
        </div>
    )
}

const template = (
    <div>
        <h1>Page Title.</h1>
        <p>This is my page.</p>
    </div>
)

ReactDOM.render((
    <Layout>
        <p>Using children prop</p>
    </Layout>
), document.getElementById('app'));