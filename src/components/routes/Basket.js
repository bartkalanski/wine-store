import React from "react";
import { connect } from "react-redux";

class Basket extends React.Component {

  render() {
     if(this.props.items.length){
         return this.props.items.map(item => {
             return(
                <div class="ui card">
                <img
                  class="image"
                  src={item.image}
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
                <div class="left aligned extra content">{item.quantity}</div>
                <button
                  onClick={() => this.handleClick(item.id)}
                  class="orange ui button"
                >
                  Add To Basket
                </button>
              </div>
             )
         })
     }
     return <div>No</div>
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.itemsInBasket
  };
};

export default connect(mapStateToProps)(Basket);
