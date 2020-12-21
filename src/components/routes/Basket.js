import React from "react";
import { connect } from "react-redux";

import "./Basket.css";

class Basket extends React.Component {
  render() {
    const basketList = this.props.items.map((item) => {
      return (
        <React.Fragment>
          <div className="basket__holder">
            <div className="basket__img">
              <img
                className="basket__img-img"
                src={item.image}
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
            </div>
          </div>
        </React.Fragment>
      );
    });

    if (this.props.items.length) {
      return (
        <div className="ui container basket__padding" >
          <div className="basket__container">{basketList}</div>
          <div className="total__container">
            <div className="total__price">
              Total to pay: £{this.props.total}
            </div>

            <button className="ui orange button total__btn">
              Proceed to checkout
            </button>
          </div>
        </div>
      );
    }
    return (
      <div className="ui container">
        <div className="ui center aligned header">You basket is empty</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.itemsInBasket,
    total: state.total,
  };
};

export default connect(mapStateToProps)(Basket);
