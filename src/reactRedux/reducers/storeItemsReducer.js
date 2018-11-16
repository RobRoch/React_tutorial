import * as store from '../actions/storeItems';
import * as cart from '../actions/cartItems';

const mockStockItems = [
    {
        id: 1,
        title: 'Kurtka',
        cost: 14,
        promo: false,
        count:2,
        cartCount:0,
    },
    {
        id: 2,
        title: 'Bluza',
        cost: 20,
        promo: false,
        count:12,
        cartCount:0,
    },
    {
        id: 3,
        title: 'Buty',
        cost: 10,
        promo: false,
        count:22,
        cartCount:0,
    },
    {
        id: 4,
        title: 'Szalik',
        cost: 3,
        promo: false,
        count:0,
        cartCount:0,
    },
    {
        id: 5,
        title: 'Kurtka',
        cost: 500,
        promo: true,
        count:0,
        cartCount:2,
    },
    {
        id: 6,
        title: 'Bluza',
        cost: 200,
        promo: true,
        count:2,
        cartCount:0,
    },
    {
        id: 7,
        title: 'Buty',
        cost: 1000,
        promo: true,
        count:2,
        cartCount:0,
    },
    {
        id: 8,
        title: 'Klapki',
        cost: 2,
        promo: true,
        count:2,
        cartCount:2,
    },
    {
        id: 9,
        title: 'Skarpetki',
        cost: 5,
        promo: false,
        count:0,
        cartCount:1,
    }
]

const initialState = {
    normalItems: mockStockItems.filter(item => item.promo === false && item.count > 0),
    promoItems: mockStockItems.filter(item => item.promo === true && item.count > 0),
    cartItems: mockStockItems.filter(item => item.cartCount > 0),
}



export default (state = initialState, { type, payload }) => {
    switch (type) {

        case cart.REMOVE_ONE_FROM_CART:
            return { ...state, cartCount : payload }

        default:
            return state
    }
}
