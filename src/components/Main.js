import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch  } from "react-redux";
import Item from "./Item";
import { setItems } from "../stateManagement/actions/itemsActions";
import AddItemForm from './AddItemForm';
import ToggleAddItemFormButton from "./ToggleAddItemFormButton";

export default function Main() {
  const dispatch = useDispatch();
  
  const fetchCartItems = async () => {
    const response = await axios.get('./cartItems.json').catch( error => {
      console.log( 'Error: ', error );
    });
    dispatch( setItems(response.data) );
  };

  useEffect( () => {
    fetchCartItems();
  }, []);

  return (
    <main className="main">
      <ToggleAddItemFormButton />
      <AddItemForm />
      <Item />
    </main>
  )
}