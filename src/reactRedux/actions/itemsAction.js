export const REMOVE_ITEM_FROM_STORE = 'REMOVE_ITEM_FROM_STORE';
export const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART';
export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';

export const removeItemFromStore = () => ({
  type: REMOVE_ITEM_FROM_STORE,
  payload : 0
})

export const removeItemFromCart = (id) => ({
    type: REMOVE_ITEM_FROM_CART,
    payload: id,
});

export const addItemToCart = (id) => ({
    type: ADD_ITEM_TO_CART,
    payload: id,
});