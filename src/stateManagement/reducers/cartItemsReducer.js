import * as actions from '../actions/actionTypes';

const initialState = {
  items: [],
};

export const cartItemsReducer = ( state = initialState, action ) => {
  let nextState = state;
  const itemId = action.payload;
  

  switch ( action.type ) {
    case actions.SET_ITEMS:
      return {...state, items:action.payload};

    case actions.ITEM_REMOVE:
      nextState.items.items = state.items.items.filter( item => ( item.id !== itemId ));
      return {...nextState};

    case actions.ITEM_COUNT_PLUS:
      const chosenItemPlus = state.items.items.filter( item => ( item.id === itemId ) );
      const chosenItemPlusIndex = nextState.items.items.indexOf(chosenItemPlus[0]);
      const chosenItemPlusModified = chosenItemPlus[0];
      ++chosenItemPlusModified.quantity;
      nextState.items.items = state.items.items.map( ( item, index ) => {
        if ( index === chosenItemPlusIndex ) {
          return chosenItemPlusModified;
        } else {
          return item;
        }
      })
      return {...nextState};

    case actions.ITEM_COUNT_MINUS:
      const chosenItemMinus = state.items.items.filter( item => ( item.id === itemId ) );
      const chosenItemMinusIndex = nextState.items.items.indexOf(chosenItemMinus[0]);

      if ( chosenItemMinus[0].quantity > 1 ) {
        const chosenItemMinusModified = chosenItemMinus[0];
        --chosenItemMinusModified.quantity;
        nextState.items.items = state.items.items.map( ( item, index ) => {
          if ( index === chosenItemMinusIndex ) {
            return chosenItemMinusModified;
          } else {
            return item;
          }
        })
      };
      return {...nextState};

    case actions.ADD_SHOP_ITEM_TO_CART:
      const itemData = action.payload;

      const isItemInCart = state.items.items.find( item => { if( item.id === action.payload.id) return true});
      if ( isItemInCart !== undefined) {
        alert('Item is already in your cart!');
        return {...nextState};
      }

      const newItemInCart = {};
      newItemInCart.id = itemData.id;
      newItemInCart.name = itemData.name;
      newItemInCart.price = itemData.price;
      newItemInCart.quantity = 1;
      newItemInCart.imageUrl = itemData.imageUrl;

      nextState.items.items = [newItemInCart, ...state.items.items];

      return {...nextState};
    
    default:
      return state;
  }
}