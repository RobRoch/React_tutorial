/* eslint no-eval: 0 */
import React from 'react';
import '../../scss/calculator.scss';

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.operators = ['+','-','/','*','CA'];
        this.state = {
            view : '0'
        }
    }
    handleNumber = (e) => {
        let last = this.state.view.substring(this.state.view.length-1);
        let val = e.target.value;
        if (last ==='/' && val ==='0') {
            this.setState({
                view: this.state.view
            })
        } else if(this.state.view === '0') {
            this.setState({
                view : val
            });
        } else {
            this.setState({
                view : this.state.view + val
            });
        }
    }
    handleOperator = (e) => {
        let val = e.target.value;
        let last = this.state.view.substring(this.state.view.length-1);
        if(val === 'CA') {
            this.setState({
                view: '0'
            })
        } else if (this.operators.includes(last)) {
            this.setState({
                view: this.state.view.slice(0,-1) + val
            })
        } else {
            this.setState({
                view: this.state.view + val
            })
        }
    }
    handleSubmit = () => {
        let last = this.state.view.substring(this.state.view.length-1);
        if (this.operators.includes(last)) {
            this.setState({
                view: this.state.view.slice(0,-1)
            })
        };
        let value = parseFloat(eval(this.state.view).toPrecision(5)).toString();
        console.log(value);
        this.setState({
            view: value
        })
    }
    render() {
        return(
            <div className='calculator__section section'>
                <div className='calculator__wrapper wrapper'>
                    <h1 className='calculator__header header'>Second task: Simple calculator</h1>
                    <View view={this.state.view} />
                    <div className='calculator__clickable'>
                        <Numbers handleNumber={this.handleNumber}/>
                        <Submit handleSubmit={this.handleSubmit} />
                        <Operators handleOperator={this.handleOperator} operators={this.operators}/>   
                    </div>
                </div>
            </div>
        )
    }
}

function View(props) {
    return(
        <div className='calculator__view'>{props.view}</div>
    )
}
function Numbers(props) {
    const numbers = [0,1,2,3,4,5,6,7,8,9].reverse();
    const numberList = numbers.map(number => <button className='calculator__number' key={number} value={number} onClick={props.handleNumber}>{number}</button>);
    return (
        <div className='calculator__numbers button'>
            {numberList}   
        </div>    
    );
}

function Operators(props) {
    const operators = props.operators;
    const operatorList = operators.map(operator => <button className='calculator__operator' key={operator} value={operator} onClick={props.handleOperator}>{operator}</button>)
    return (
        <div className='calculator__operators button'>
            {operatorList}   
        </div>    
    );
}

function Submit(props) {
    return(
        <button className='calculator__submit button' value='=' onClick={props.handleSubmit}>=</button>
    )
}