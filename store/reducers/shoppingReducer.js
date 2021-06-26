import * as types from '../types';

const initialState = {
  cart: [],
  currentItem: null,
};

export const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      const { item } = action.payload;
      const inCart = state.cart.find((prod) =>
        prod.id === item.id ? true : false,
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((prod) =>
              prod.id === item.id ? { ...prod, qty: prod.qty + 1 } : prod,
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case types.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case types.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item,
        ),
      };
    case types.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};
