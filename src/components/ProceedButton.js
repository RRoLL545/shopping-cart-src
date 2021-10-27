import React from 'react';
import { toggleElementClass } from './functions';

export default function ProceedButton() {
  return (
    <div className="proceed-button-wrapper">
      <button className="controls-button proceed-button" onClick={proceed}>Proceed</button>
    </div>
  )
}

const proceed = () => {
  toggleElementClass( 'shopping-cart', 'invisible' );

  toggleElementClass( 'checkout-data', 'invisible' );

  toggleElementClass( 'proceed-info', 'invisible' );
}