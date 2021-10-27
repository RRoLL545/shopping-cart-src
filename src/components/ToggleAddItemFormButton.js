import React from 'react';
import { toggleElementClass } from './functions';

export default function ToggleAddItemFormButton() {
  return (
    <div className="toggle-button-wrapper">
      <button className="controls-button toggle-button" onClick={toggleAddItemsForm}></button>
    </div>
  )
}

const toggleAddItemsForm = () => {
  toggleElementClass( 'add-new-item', 'invisible' );

  toggleElementClass( 'toggle-button', 'button-rotated' );
}