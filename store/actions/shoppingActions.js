import * as types from '../types';

export const addToCart = (item) => {
  return {
    type: types.ADD_TO_CART,
    payload: {
      item,
    },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: types.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const adjustQty = (itemID, value) => {
  return {
    type: types.ADJUST_QTY,
    payload: {
      id: itemID,
      qty: value,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: types.LOAD_CURRENT_ITEM,
    payload: item,
  };
};
