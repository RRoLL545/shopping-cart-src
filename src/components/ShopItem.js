import React from 'react';
import { useSelector  } from "react-redux";
import store from '../stateManagement/store';
import * as actions from '../stateManagement/actions/itemsActions';

export default function ShopItem( props ) {
  const shopItems = useSelector( state => state.shopItems.shopItems.items );

  const keyWord = props.term;

  if ( keyWord ) {
    const foundItems = shopItems.filter( item => {
      return item.name.toLowerCase().replace(/\s/g, '').includes(keyWord.toLowerCase());
    })
    
    const renderFilteredShopItems = foundItems.length === 0 ? 'Items are not found' :
    foundItems.map( shopItem => {
      const { id, name, imageUrl, price } = shopItem;
      return (
        <div key={id} className={`shop-item shop-item-${id}`} price={price} name={name} imageurl={imageUrl}>
          <img src={ imageUrl } alt={ name } className={`shop-item-img shop-item-img-${id}`}></img>
          <h4 className="shop-item-name">{name}</h4>
          <div className={`item-price-${id}`}>{price} rub.</div>
          <button className={`controls-button shop-item-add shop-item-add-${id}`} onClick={addButtonClicked}>Add</button>
        </div>
      )
    })
  
    return <>{renderFilteredShopItems}</>;
  } else {
    return <>{`Find items to add in your cart`}</>;
  }
}

function addButtonClicked(e) {
  const itemData = {};
  itemData.id = e.target.className.replace( /^\D+/g, '');

  const itemDataElement = document.querySelector(`.shop-item-${itemData.id}`);

  itemData.imageUrl = itemDataElement.getAttribute("imageurl");
  itemData.name = itemDataElement.getAttribute("name");
  itemData.price = itemDataElement.getAttribute("price");

  store.dispatch( actions.addShopItem(itemData) );
}