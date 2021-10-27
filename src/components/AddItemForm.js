import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import { useSelector, useDispatch  } from "react-redux";
import { setShopItems } from "../stateManagement/actions/itemsActions";
import ShopItem from './ShopItem';


/** 
 * Returns DOM element using which allow to search items in shop and add them to shopping cart
 * @return {*} DOM element
*/
export default function AddItemForm() {
  const shopItems = useSelector( state => state );
  const dispatch = useDispatch();

  /**
   * Fetch shop items data and dispatch it to the redux store
   * 
   * @async
   * @returns void
   */
  const fetchShopItems = async () => {
    const response = await axios.get('./shopItems.json').catch( error => {
      console.log( 'Error: ', error );
    });
    dispatch( setShopItems(response.data) );
  };

  useEffect( () => {
    fetchShopItems();
  }, []);

  //Search
  const [ searchTerm, setSearchTerm ] = useState('');
  const inputEl = useRef('');

  /**
   * Gets input value from input and pass it to setSearchTerm() useState hook
   * @returns void
   */
  const getSearchTerm = () => {
    setSearchTerm(inputEl.current.value);
  };

  return (
    <>
      <div className="add-new-item invisible">
        <h3 className="add-new-item-name">Add new item in to your cart</h3>
        <div className="search-input-wrapper">
          <input ref={inputEl} id="search" type="search" className="search-input" placeholder="Type item name" onChange={ getSearchTerm }></input>
          <div className="search-icon"></div>
        </div>
        <div className="shop-items-add">
          <ShopItem term={searchTerm} />
        </div>
      <hr className="items-horizontal-divider" />
      </div>
    </>
  )
}