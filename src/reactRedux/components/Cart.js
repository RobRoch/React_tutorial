import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/cartItems'

const createCartList = (arr,remove) => {
  return arr.map(item=>
      <div key={item.id} className='item'>
        <div className='item__wrapper'>
          <div className='item__spec'>
              <p className='item__title'>id:{item.id} | {item.title}</p>
              <p className='item__cost'>{item.cost} zł</p>
              <p><button className='item__button'>Dodaj</button><button className='item__button' >Odejmij</button></p>
          </div>
          <div className='item__count'>
              <p>Ilość</p>
              <p>{item.cartCount}</p>
          </div>
        </div>
      </div>
    )
}


export class Cart extends Component {

  removeFromCart = (e) => {
    this.props.removeFromCart(e);
  }

  render() {
    
    let cartItems = createCartList(this.props.cartItems, this.props.removeFromCart);
    let sum = this.props.cartItems.reduce((total,amount)=> total + amount.cost*amount.cartCount
    ,0);

    return (
      <div className='items__section'>
        <div className='items'>
          <h2 className='item__title'>Mój Koszyk</h2>
          <h3 className='item__title'>Suma: {sum} zł</h3>
          {cartItems}
          
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  cartItems : state.stockItems.cartItems
})

const mapDispatchToProps = dispatch => ({
    removeFromCart: (e) => dispatch(actions.removeItemFromCart(e))

})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
