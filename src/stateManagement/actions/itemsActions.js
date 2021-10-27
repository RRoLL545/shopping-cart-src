import * as actionTypes from './actionTypes';

export const countMinus = id => (
  {
    type: actionTypes.ITEM_COUNT_MINUS,
    payload: id
  }
)

export const countPlus = id => (
  {
    type: actionTypes.ITEM_COUNT_PLUS,
    payload: id
  }
)

export const deleteCartItem = id => (
  {
    type: actionTypes.ITEM_REMOVE,
    payload: id
  }
)

export const setItems = items => {
  return {
    type: actionTypes.SET_ITEMS,
    payload: items,
  };
};

export const setSummary = items => {
  return {
    type: actionTypes.SET_SUMMARY,
    payload: items,
  };
};

export const setShopItems = shopItems => {
  return {
    type: actionTypes.SET_SHOP_ITEMS,
    payload: shopItems,
  };
};

export const addShopItem = itemData => {
  return {
    type: actionTypes.ADD_SHOP_ITEM_TO_CART,
    payload: itemData,
  };
};