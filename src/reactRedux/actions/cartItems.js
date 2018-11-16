export const REMOVE_ONE_FROM_CART = 'REMOVE_ONE_FROM_CART';
export const ADD_ONE_TO_CART = 'ADD_ONE_TO_CART';

export const removeItemFromCart = () => ({
    type: 'REMOVE_ONE_FROM_CART',
    payload: 1,
});

export const addOneToCart = () => ({
    type: 'ADD_ONE_TO_CART',
    payload: 1,
});