import React, { Component } from "react";
import { connect } from "react-redux";
import { addToBasket } from '../../actions/cartActions'

class Store extends Component {
  handleClick(id) {
   this.props.addToBasket(id);

  }
  render() {
    const itemList = this.props.items.map((item) => {
      return (
        <div class="six wide column">
          <div class="ui card">
            <img
              class="image"
              src={item.image}
              alt={item.title}
              style={{ height: "300px", width: "100px", alignSelf: "center" }}
            />
            <div class="content">
              <div class="center aligned header">{item.title}</div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div class="description">{item.type}</div>
                <div class="description">{item.origin}</div>
              </div>
            </div>
            <div class="left aligned extra content">{item.price}</div>
            <button
              onClick={() => this.handleClick(item.id)}
              class="orange ui button"
            >
              Add To Basket
            </button>
          </div>
        </div>
      );
    });
    return (
      <div className="ui container" style={{ padding: "20px" }}>
        <div
          className="ui grid"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {itemList}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToBasket: (id) => {
      dispatch(addToBasket(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Store);
