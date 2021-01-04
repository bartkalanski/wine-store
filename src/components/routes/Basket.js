import React from "react";
import { connect } from "react-redux";

import "./Basket.css";
import BasketList from "./BasketList";

class Basket extends React.Component {
  formatPrice(totalPrice) {
    const formatTotalPrice = {
      style: "currency",
      currency: "GBP",
    };
    return totalPrice.toLocaleString("en-GB", formatTotalPrice);
  }
  render() {
    if (this.props.items.length) {
      return (
        <div className="ui container basket__padding">
          <div className="basket__container">
            <BasketList items={this.props.items} />
          </div>
          <div className="total__container">
            <div className="total__price">
              Total to pay: {this.formatPrice(this.props.total)}
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
