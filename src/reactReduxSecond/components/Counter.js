import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCounter, removeCounter, resetCounter } from '../actions/countActions'

export class Counter extends Component {

  render() {
    return (
      <div className='counter__part part'>
        <h2>Here will be simple Counter</h2>
          <div className='counter__view'>{this.props.counter}</div><br/>
          <div className='counter__button__wrapper'>
            <button className='counter__button add' onClick={this.props.addCounter}>ADD</button><br/>
            <button className='counter__button remove' onClick={this.props.removeCounter}>REMOVE</button><br/>
            <button className='counter__button reset' onClick={this.props.resetCounter}>RESET</button>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter : state.countReducer.count
})

const mapDispatchToProps = {
  addCounter,
  removeCounter,
  resetCounter
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
