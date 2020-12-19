import React, { Component } from "react";
import { connect } from "react-redux";

class Store extends Component {
  render() {
    const itemList = this.props.items.map((item) => {
      return (
        <div class="six wide column">
          <div class="ui card">
            <img class="image" src={item.image} style={{height: '300px',width: '100px', alignSelf: 'center'}}/>
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
            <button class="orange ui button">Add To Basket</button>
          </div>
        </div>
      );
    });
    return (
      <div className="ui container" style={{ padding: "20px" }}>
        <div className="ui large header">Our Wines</div>
        <div className="ui grid" style={{display: 'flex', justifyContent: 'center'}}>{itemList}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

export default connect(mapStateToProps)(Store);
