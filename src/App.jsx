const React = require('react')
const ReactDOM = require('react-dom')

class App extends React.Component{
    render(){
        return(
            React.createElement('div',null,'Hello webpack!!')
        )
    }
}

ReactDOM.render(
    React.createElement(App),
    document.querySelector('#root')
)