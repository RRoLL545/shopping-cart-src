import React from "react";
import NavBar from "./NavBar";


/** 
 * Returns DOM element Header
 * @return {*} DOM element
*/
export default function Header() {
  return (
    <header className="header">
      <div className="optimax-logo optimax-logo-header">
        <h1 className="h1-invisible">Shopping cart</h1>
      </div>
      <NavBar additionalClassName={"navigation-bar-header"}/>
    </header>
  )
}