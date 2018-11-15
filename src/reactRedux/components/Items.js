import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createList } from '../helpers/createItemsList'
import * as actions from '../actions/storeItems'

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
