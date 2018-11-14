import React from 'react'
import Items from './Items'
import Cart from './Cart'
import '../scss/shop.scss';

export default class Shop extends React.Component {
    
    render() {
        return(
        <div className='shop__section'>
            <Items />
            <Cart />
        </div>
        )
    }
}