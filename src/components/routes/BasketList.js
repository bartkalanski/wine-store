import React from 'react'
import { useDispatch } from 'react-redux'

import getImageFromJson from "../helper-functions/getImageFromJson";
import { removeFromBasket } from "../../actions/cartActions";

const BasketList = ({ items }) => {
  const dispatch = useDispatch()
    return items.map((item) => {
        return (
          <React.Fragment>
            <div className="basket__holder">
              <div className="basket__img">
                <img
                  className="basket__img-img"
                  src={getImageFromJson(item.image)}
                  alt={item.title}
                />
              </div>
              <div className="basket__data">
                <div className="basket__name">Name: {item.title}</div>
                <div className="basket__origin">
                  Country of Origin: {item.origin}
                </div>
                <div className="basket__price">Price: £ {item.price}</div>
                <div className="basket__quantity">Quantity: {item.quantity}</div>
                <button className="ui negative basic button"  onClick={() => dispatch(removeFromBasket(item.id))}>Remove</button>
              </div>
            </div>
          </React.Fragment>
        );
      });
}

export default BasketList