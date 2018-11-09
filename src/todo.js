import React from 'react';


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
            <div>
                <Input userInput={this.state.userInput} handleTyping={this.handleTyping} handleSubmit={this.handleSubmit}/>
                <ToDoList list={this.state.list}/>
            </div>
        )
    }
}

function Input(props) {
    return (
        <div>
            <input type='text' value={props.userInput} onChange={props.handleTyping}/>
            <button onClick={props.handleSubmit}>Submit</button>
        </div>
    );
}

function ToDoList(props) {
    const list = props.list.map((one,index) => <li key={index}>{one}</li>);
    return (
        <ul>
            {list}
        </ul>
    );
}
