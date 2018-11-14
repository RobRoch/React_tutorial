import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/store/storeItems'

export class Items extends Component {
  
  render() {

    let items = this.props.normalItems.map(item=>
      <div key={item.id}>
        <p>{item.title}</p>
        <p>{item.cost}</p>
        <button>Add</button>
      </div>
    );
    let promoItems = this.props.promoItems.map(item=>
      <div key={item.id}>
        <p>{item.title}</p>
        <p>{item.cost}</p>
        <button>Add</button>
      </div>
    );
    // let promoItems = this.props.promoItems;
    
    return (
      <div className='items__section'>
        <div className='items__normal'>
          {items}
        </div>
        <div className='items__promo'>
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
