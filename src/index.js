import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import ShoppingCart from './components/ShoppingCart';
import store from "./stateManagement/store";
//import { decrementButtonClicked, incrementButtonClicked } from './components/QuantityControl';

import './CSS/index.css';
import './CSS/reset.css';
import './CSS/shopping-cart.css';
import './CSS/header.css';
import './CSS/main.css';
import './CSS/aside.css';
import './CSS/footer.css';
import './CSS/item.css';
import './CSS/quantityControl.css';
import './CSS/itemDelete.css';
import './CSS/addItemForm.css';
import './CSS/toggle-button.css';
import './CSS/summary.css';
import './CSS/shopItem.css';
import './CSS/navBar.css';
import './CSS/itemsSummaryTable.css';
import './CSS/checkoutButton.css';
import './CSS/checkoutData.css';
import './CSS/proceedButton.css';
import './CSS/proceedInfo.css';
import './CSS/media.css';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ShoppingCart />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);