const mockStockItems = [
    {
        id: 1,
        title: 'Kurtka',
        cost: 14,
    },
    {
        id: 2,
        title: 'Bluza',
        cost: 20
    },
    {
        id: 3,
        title: 'Buty',
        cost: 10
    },
    {
        id: 4,
        title: 'Szalik',
        cost: 3
    },
]
const mockPromoItems = [
    {
        id: 5,
        title: 'Kurtka',
        cost: 500
    },
    {
        id: 6,
        title: 'Bluza',
        cost: 200
    },
    {
        id: 7,
        title: 'Buty',
        cost: 1000
    }
]
const mockCartItems = [
    {
        id: 8,
        title: 'Klapki',
        cost: 2,
        count: 3,
        cartCount: 2
    },
    {
        id: 9,
        title: 'Skarpetki',
        cost: 5,
        count:0,
        cartCount: 1
    }
]

const initialState = {
    normalItems: mockStockItems,
    promoItems: mockPromoItems,
    cartItems: mockCartItems,
}


export default (state = initialState, { type, payload }) => {
    switch (type) {

        case 'typeName':
            return { ...state, ...payload }

        default:
            return state
    }
}
