import React from 'react';
import '../../scss/todo.scss';

export default class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list : [],
            userInput : ''
        }
        this.handleTyping = this.handleTyping.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit() {
        this.setState({
            list : this.state.list.concat(this.state.userInput),
            userInput : ''
        })
    }
    handleTyping(e) {
        this.setState({
            userInput : e.target.value
        })
    }
    render() {
        return (
            <div className='todo__section section'>
                <div className='todo__wrapper wrapper'>
                    <h1 className='todo__header header'>First task: Todo app</h1>
                    <Input userInput={this.state.userInput} handleTyping={this.handleTyping} handleSubmit={this.handleSubmit}/>
                    <ToDoList list={this.state.list}/>
                </div>
            </div>
        )
    }
}

function Input(props) {
    return (
        <div className='todo__input'>
            <input className='todo__input__field' type='text' value={props.userInput} onChange={props.handleTyping}/>
            <input className='todo__input__submit' type='submit' value='Submit' onClick={props.handleSubmit} />
        </div>
    );
}

function ToDoList(props) {
    const list = props.list.map((one,index) => <li key={index} className='todo__list__data'>{one}</li>);
    return (
        <ul className='todo__list'>
            {list}
        </ul>
    );
}
