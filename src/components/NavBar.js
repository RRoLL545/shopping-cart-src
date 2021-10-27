import React from 'react';

export default function NavBar( props ) {
  const {additionalClassName} = props;
  return (
    <nav className={`navigation-bar ${additionalClassName}`}>
      <ul className="navigation-bar-list ">
        <li><a href="https://rroll545.github.io/Shopping-cart/" className="navigation-bar-item">Main page</a></li>
        <li><a href="#" className="navigation-bar-item">Catalogue</a></li>
        <li><a href="#" className="navigation-bar-item">Support</a></li>
      </ul>
    </nav>
  )
}
