import React from 'react'
import Items from './Items'
import Cart from './Cart'
import '../scss/shop.scss';

export default class Shop extends React.Component {
    
    render() {
        return(
        <div className='shop__section section'>
            <h1 className='shop__header'>Third task: Redux shop</h1>
            <div className='shop__wrapper'>
                <Items />
                <Cart />
            </div>
        </div>
        )
    }
}

