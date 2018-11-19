import React, { Component } from 'react'
import { connect } from 'react-redux'
import {removeItemFromCart, addItemToCart} from '../actions/itemsAction'

export class Cart extends Component {

  createCartList = (arr) => {
    return arr.map(item=>
        <div key={item.id} className='item'>
          <div className='item__wrapper'>
            <div className='item__spec'>
                <p className='item__title'>id:{item.id} | {item.title}</p>
                <p className='item__cost'>{item.cost} zł</p>
                <p><button className='item__button'  onClick={() => {this.props.addItemToCart(item.id)}}>Dodaj</button><button className='item__button' onClick={() => {this.props.removeItemFromCart(item.id)}}>Odejmij</button></p>
            </div>
            <div className='item__count'>
                <p>Ilość</p>
                <p>{item.cartCount}</p>
            </div>
          </div>
        </div>
      )
  }

  render() {
    
    let cartItems = this.createCartList(this.props.cartItems);
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
  cartItems : state.stockItems.items.filter(item => item.cartCount > 0)
})

const mapDispatchToProps = {
    addItemToCart,
    removeItemFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)