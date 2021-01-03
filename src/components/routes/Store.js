import React, { Component } from "react";
import { connect } from "react-redux";

import "./Store.css";
import StoreList from "./StoreList";

class Store extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui grid">
          <StoreList items={this.props.items} />
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

export default connect(mapStateToProps)(Store);
