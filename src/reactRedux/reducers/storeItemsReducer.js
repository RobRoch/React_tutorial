import {REMOVE_ITEM_FROM_CART, ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_STORE} from '../actions/itemsAction';

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
           return {...state, items: removeItem(state.items,payload)}

        case ADD_ITEM_TO_CART: 
           return {...state, items: addItem(state.items,payload)}

        case REMOVE_ITEM_FROM_STORE: 
           return {...state, items: removeItemFromStore(state.items,payload)}

        default:
            return state
    }
}

function removeItem(state, payload) {
    return state.map((item) => {
      if(item.id === payload) {
        
        return {
          ...item,  
          cartCount: item.cartCount - 1,
          count: item.count + 1,        
        }
      }
      return item;
    });
}

function addItem(state, payload) {
    return state.map((item) => {
      if(item.id === payload && item.count > 0) {
        
        return {
          ...item,  
          cartCount: item.cartCount + 1,
          count: item.count - 1,        
        }
      }
      return item;
    });
}

function removeItemFromStore(state, payload) {
    return state.filter((item) => {
        if(item.id === payload) {
            return false;
        }
        return true;
    })
}