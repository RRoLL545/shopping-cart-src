import * as actions from '../actions/actionTypes';

const initialState = {
  shopItems: [],
};

export const shopItemsReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case actions.SET_SHOP_ITEMS:
      return {...state, shopItems:action.payload};
    default:
      return state;
  }
}