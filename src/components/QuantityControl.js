import React from 'react';
import store from '../stateManagement/store';
import * as actions from '../stateManagement/actions/itemsActions';

export default function QuantityControl( props ) {
  const { id, quantity} = props;
  return (
    <div className={`item-control-tab item-control-tab-${id}`}>
      <button className="controls-button item-control item-minus" onClick={decrementButtonClicked}>-</button>
      <div className={`item-quantity item-id-${id}`}>{ quantity }</div>
      <button className="controls-button item-control item-plus" onClick={incrementButtonClicked}>+</button>
    </div>
  )
}


function decrementButtonClicked(e) {
  const itemId = e.target.parentNode.className.replace( /^\D+/g, '');
  store.dispatch( actions.countMinus(itemId) );
}

function incrementButtonClicked(e) {
  const itemId = e.target.parentNode.className.replace( /^\D+/g, '');
  store.dispatch( actions.countPlus(itemId) );
}