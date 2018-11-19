import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCounter, removeCounter, resetCounter } from '../actions/countActions'

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.isBlocked = ''
  }
  count = (counter, maxLength) => {
    let ixMax = (counter >= maxLength);
    let val =  this.props.fetched ? ixMax ? 'MAX' : counter : ixMax ? maxLength : counter;
    ixMax ? this.isBlocked = 'blocked'  : this.isBlocked = '';
    return val;
  }
  render() {
    return (
      <div className='counter__part part'>
        <h2>Here will be simple Counter</h2>
          <div className='counter__view'>Fetched users: {this.props.usersLength}</div><br/>
          <div className='counter__view'>Shown users: {this.count(this.props.counter, this.props.usersLength)}</div><br/>
          {/* {this.state.isBlocked} */}
          <div className='counter__button__wrapper'>
            <button className={'counter__button add ' + this.isBlocked} onClick={this.props.addCounter}>ADD</button><br/>
            <button className='counter__button remove' onClick={this.props.removeCounter}>REMOVE</button><br/>
            <button className='counter__button reset' onClick={this.props.resetCounter}>RESET</button>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter : state.countReducer.count,
  usersLength : state.userReducer.users.length,
  fetched : state.userReducer.fetched
})

const mapDispatchToProps = {
  addCounter,
  removeCounter,
  resetCounter
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
