import React from "react";
import { useDispatch } from "react-redux";

import getImageFromJson from "../helper-functions/getImageFromJson";
import { removeFromBasket } from "../../actions/cartActions";

const BasketList = ({ items }) => {
  const dispatch = useDispatch();
  return items.map((item) => {
    return (
      <React.Fragment>
        <div className="basket__holder">
          <div className="basket__divider">
            <div className="basket__img">
              <img
                className="basket__img-img"
                src={getImageFromJson(item.image)}
                alt={item.title}
              />
            </div>
            <div className="basket__remove">
              <div className="basket__name">{item.title}</div>
              <button
                className="ui negative basic button"
                onClick={() => dispatch(removeFromBasket(item.id))}
              >
                Remove Item
              </button>
            </div>
          </div>

          <div className="basket__data">
            <div className="basket__origin">{item.origin}</div>
            <div className="basket__price">{item.price}</div>
            <div className="basket__quantity">{item.quantity}</div>
          </div>
        </div>
      </React.Fragment>
    );
  });
};

export default BasketList;
