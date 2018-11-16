export const REMOVE = 'REMOVE';
export const ADD_TO_CART = 'ADD_TO_CART';

export const removeItem = () => ({
  type: REMOVE,
  payload : 0
})

export const addItemToCart = () => ({
  type: ADD_TO_CART,
  payload : 1
})
