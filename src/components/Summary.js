import React from 'react';
import SummaryTable from './SummaryTable';
import CheckoutButton from './CheckoutButton';

export default function Summary() {
  return (
    <div className="summary">
      <h2 className="summary-name">Summary</h2>
      <SummaryTable />
      <CheckoutButton />
    </div>
  )
}