import React from 'react';

import ToDo from './reactOnly/components/todo/todo.js';
import Calculator from './reactOnly/components/calculator/calculator.js';


export default class Simple extends React.Component {
    render() {
        return(
            <div>
                <Calculator/>
                <ToDo/>
            </div>
        )
    }
}