import React from 'react';
import SummaryTable from './SummaryTable';
import ProceedButton from './ProceedButton';


/** 
 * Returns DOM element with checkout data and Proceed button
 * @return {*} DOM element
*/
export default function CheckoutData() {
  return (
    <div className="checkout-data invisible">
      <h4 className="checkout-data-name">Your cart summary</h4>
      <SummaryTable />
      <ProceedButton />
    </div>
  )
}
