import React from 'react';
import { toggleElementClass } from './functions';


/** 
 * Returns DOM element "Check button"
 * @return {*} DOM element
*/
export default function CheckoutButton() {
  return (
    <div className="total-checkout-wrapper">
      <button className="controls-button total-checkout" onClick={checkout}>Checkout</button>
    </div>
  )
}

/**
 * Function is triggered by clicking Checkout button and toggle classNames (overlay, overlay, invisible) to DOM elements with classNames (name, aside, checkout-data)
 * @returns void
 */
const checkout = () => {
  toggleElementClass( 'main', 'overlay');

  toggleElementClass( 'aside', 'overlay');

  toggleElementClass( 'checkout-data', 'invisible');
}