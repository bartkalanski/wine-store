import React from "react";
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './Header.css'

const Header = () => {

  const basketQuantity = useSelector((state)=>state.quantity)
  return (
    <div class="ui segment">
      <div class="ui secondary menu">
        <div className="ui container">
        <div className="ui large red header" style={{paddingTop: '15px'}}>Wine Store</div>
        <div className="right menu">
          <Link to="/" className="item">Store</Link>
          <Link to="/basket" className="item">Basket</Link>
          <Link to="/basket" className="item">
            <i className="shopping basket icon"></i>
            <span className="shopping__basket-items">{basketQuantity > 0 ? basketQuantity: null}</span>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
