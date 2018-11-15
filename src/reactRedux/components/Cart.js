import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createCartList } from '../helpers/createCartItemsList'
import * as actions from '../actions/storeItems'

export class Cart extends Component {
 
  render() {
    let cartItems = createCartList(this.props.cartItems);
    return (
      <div className='items__section'>
        <div className='items'>
          <h2 className='item__title'>Mój Koszyk</h2>
          {cartItems}
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  cartItems : state.stockItems.cartItems
})


export default connect(mapStateToProps, actions)(Cart)
