import ReactDOM from 'react-dom';
import React from 'react';
import ToDo from './todo.js';

class App extends React.Component {
    render() {
        return(
            <div>
                <h1>Todo app</h1>
                <ToDo/>
                <br/>
                <h2>Calculator</h2>
            </div>
        )
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
