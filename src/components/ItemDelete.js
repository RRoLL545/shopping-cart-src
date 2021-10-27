import React from 'react';
import store from '../stateManagement/store';
import * as actions from '../stateManagement/actions/itemsActions';


/**
 * Returns DOM element which ia able to delete chosen Cart Item from the Shopping Cart
 * @param {object} props - props from parent NODE with identifier (id: {string})
 * @returns  {*} DOM element
 */
export default function ItemDelete( props ) {
  const { id } = props;
  return (
    <div className="item-delete-wrapper">
      <button className={`controls-button item-control item-delete item-delete-${id}`} onClick={deleteButtonClicked}>X</button>
    </div>
  )
}


/**
 * Delete chosen Cart Item from the Shopping Cart
 * @param {object} e - event object from clicked button
 * @returns void
 */
function deleteButtonClicked(e) {
  const deleteCartItemId = e.target.className.replace( /^\D+/g, '');
  store.dispatch( actions.deleteCartItem(deleteCartItemId) );
}