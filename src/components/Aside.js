import React from 'react';
import Summary from './Summary';


/** 
 * Returns DOM element which shows the summary of shopping cart
 * @return {*} DOM element
*/
export default function Aside() {
  return (
    <div className="aside">
      <Summary />
    </div>
  );
}