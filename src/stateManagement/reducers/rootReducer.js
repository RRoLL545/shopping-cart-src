import { combineReducers } from "redux";
import { cartItemsReducer } from './cartItemsReducer';
import { shopItemsReducer } from './shopItemsReducer';

 const rootReducer = combineReducers( {
  cartItems: cartItemsReducer,
  shopItems: shopItemsReducer,
} );

export default rootReducer;