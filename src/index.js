import ReactDOM from 'react-dom';
import React from 'react';
import ToDo from './components/todo/todo.js';
import Calculator from './components/calculator/calculator.js';
import './scss/style.scss';

class App extends React.Component {
    render() {
        return(
            <div>
                <Calculator/>
                <ToDo/>
                
            </div>
        )
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
