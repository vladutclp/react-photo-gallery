import * as actionTypes from './shopping-types';

export const addToCart = (itemId) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemId,
    },
  };
};

export const removeFromCart = (itemId) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemId,
    },
  };
};

export const adjustQty = (itemId, value) => {
  return {
    type: actionTypes.ADJUST_QTY,
    payload: {
      id: itemId,
      qty: value,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};


export const increment = (itemId) => {
  return {
    type: actionTypes.INCREMENT,
    payload: {
      id: itemId
    }
  };
};

export const decrement = (itemId) => {
  return {
    type: actionTypes.DECREMENT,
    payload: {
      id: itemId
    }
  };
};