import React from 'react';
import { useSelector  } from "react-redux";
import QuantityControl from './QuantityControl';
import ItemDelete from './ItemDelete';


/** 
 * Returns DOM element Cart Item
 * @return {*} DOM element
*/
export default function Item() {
  const items = useSelector( state => state.cartItems.items.items );
 
  /** Transforms array with items data from the store to Item DOM elements */
  /** If received no array with data or array with no data returns text information */
  const renderItems = items === undefined ? 'Items are being loading' : items.length === 0 ? 'Cart is empty' :
    items.map( item => {
    const { id, name, imageUrl, price, quantity } = item;
    return (
      <div className={`cart-item cart-item-${id}`} key={id}>
        <img src={ imageUrl } alt={ name } className="item-img"></img>
        <div className="item-info">
          <h3 className="item-name">{ name }</h3>
          <div>Price: {price} rub.</div>
        </div>
        <div className="item-controls">
          <QuantityControl quantity={quantity} id={id} />
          <ItemDelete id={id} />
        </div>
      </div>
    );
  });

  return (
    <>
    <h2 className="cart-name">Items in your cart</h2>
      <div className="cart-items">
        {renderItems}
      </div>
    </>
  );
}