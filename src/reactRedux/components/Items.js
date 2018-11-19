import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/itemsAction'

export class Items extends Component {
  
  createList = (arr) => {
    return arr.map(item=>
        <div key={item.id} className='item'>
          <p className='item__remove'>Usuń</p>
          <p className='item__title'>id:{item.id} | {item.title}</p>
          <p className='item__cost'>{item.cost} zł</p>
          <p><button className='item__button'>Kup</button> - zostało {item.count}</p>
        </div>
        )
  }

  render() {
    let items = this.createList(this.props.normalItems);
    let promoItems = this.createList(this.props.promoItems);

    return (
      <div className='items__section'>
        <div className='items'>
          <h2 className='item__title'>Ubiór</h2>
          {items}
        </div>
        <div className='items'>
          <h2 className='item__title'>Promocje</h2>
          {promoItems}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    normalItems : state.stockItems.items.filter(item => item.promo === false && item.count > 0),
    promoItems : state.stockItems.items.filter(item => item.promo === true && item.count > 0),
})

   
export default connect(mapStateToProps, actions)(Items)
