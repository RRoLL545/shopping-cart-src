import React from 'react';
import { useSelector } from "react-redux";

export default function SummaryTable() {
  const tableNames = ['Product item name', 'Price', 'Quantity', 'Total'];
  const items = useSelector( state => state.cartItems.items.items );
  
  const totalPerItem = items === undefined || items.length === 0 ? 0 : items.map(item => item.quantity * item.price);
  const cartSummary = items === undefined || items.length === 0 ? 0 : totalPerItem.reduce( (total, current) => (
    total + current 
  ));

  
  if ( items === undefined || items.length === 0 ) {
    return <>Your cart is empty</>;
  } else {
    return (
      <>
        <table className="items-summary-table">
          <thead>
            <tr>
              {tableNames.map( (tableName, i) => {
                return (
                  <td key={`tableName-${i}`} className="table-head-name">{tableName}</td>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {items.map( (item, i) => {
              return (
                <tr key={`row-${i}`}>
                  <td className="table-cell table-cell-width-big">{item.name}</td>
                  <td className="table-cell  table-cell-align-center">{item.price}</td>
                  <td className="table-cell table-cell-align-center">{item.quantity}</td>
                  <td className="table-cell">{item.quantity * item.price}</td>
                </tr>
              )
            })}
          </tbody>
          <tfoot>
            <tr>
              <td className="table-cell summary-total" colSpan="4">Total amount: <span className="summary-value">{cartSummary}</span> rub.</td>
            </tr>
          </tfoot>
        </table>
        
      </>
    )
  }
}