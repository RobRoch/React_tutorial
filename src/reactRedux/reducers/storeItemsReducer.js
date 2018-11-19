import {REMOVE_ITEM_FROM_CART, ADD_ITEM_TO_CART} from '../actions/itemsAction';

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
    items: mockStockItems
}



export default (state = initialState, { type, payload }) => {
    switch (type) {

        case REMOVE_ITEM_FROM_CART: 
           return {...state, items: changeItem(state.items,payload, '-')}

        case ADD_ITEM_TO_CART: 
           return {...state, items: changeItem(state.items,payload, '+')}


        default:
            return state
    }
}

function changeItem(state, payload, operator) {
    return state.map((item) => {
      if(item.id === payload) {
        console.log(item.cartCount);
        return {
          ...item,  
          cartCount: eval(item.cartCount + operator + 1),
        }
      }
      return item;
    });
}