import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/storeItems'

const createList = (arr) => {
  return arr.map(item=>
      <div key={item.id} className='item'>
        <p className='item__remove'>Usuń</p>
        <p className='item__title'>id:{item.id} | {item.title}</p>
        <p className='item__cost'>{item.cost} zł</p>
        <p><button className='item__button'>Kup</button> - zostało {item.count}</p>
      </div>
      )
}

export class Items extends Component {
  
  render() {
    let items = createList(this.props.normalItems);
    let promoItems = createList(this.props.promoItems);

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
    normalItems : state.stockItems.normalItems,
    promoItems : state.stockItems.promoItems
})


export default connect(mapStateToProps, actions)(Items)
