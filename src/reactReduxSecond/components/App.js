import React, { Component } from 'react'
import Counter from './Counter'
import Users from './Users'

export default class App extends Component {
  render() {
    return (
      <div className='section fourth__section'>
        <h1 className='header fourth__header'>Fourth task: Redux simple</h1>
        <div className='wrapper fourth__wrapper'>
          <Counter />
          <Users />
        </div>
      </div>
    )
  }
}
