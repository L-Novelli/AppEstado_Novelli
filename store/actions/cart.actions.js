import {URL_API} from '../../constants/DataBase';

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CONFIRM_CART = 'CONFIRM_CART';

export const addItem = item => ({
    type: ADD_ITEM,
    item,
});

export const removeItem = item => ({
    type: REMOVE_ITEM,
    item,
});

export const confirmCart = item => ({
    type: CONFIRM_CART,
    item,
});

