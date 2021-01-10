import React from "react";
import Enzyme, { mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter as Router, Link } from "react-router-dom";

import Header from "../components/Header";
import reducer from "../reducers/basketReducer";

describe("Header component - something in the basket", () => {
  const mockStore = createStore(reducer, { basketQuantity: 1 });
  const getWrapper = () =>
    mount(
      <Provider store={mockStore}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );
  it("should render without throwing an error", () => {
    const wrapper = getWrapper();
    expect(wrapper).not.toBeNull();
  });
  it("should render Basket Link tag", () => {
    const wrapper = getWrapper();
    expect(wrapper.containsMatchingElement(<Link to="/">Store</Link>)).toEqual(
      true
    );
  });
  it("should render the quantity of products in the basket", () => {
    const wrapper = getWrapper();
    expect(wrapper.find(".shopping__basket-items").text()).toEqual("1");
  });
 
});
describe("Header component - empty basket", () => {
  const mockStore = createStore(reducer, { basketQuantity: 0 });
  const getWrapper = () =>
    mount(
      <Provider store={mockStore}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );

  it("should render nothing if basket is empty", () => {
    const wrapper = getWrapper();
    expect(wrapper.find(".shopping__basket-items").text()).toEqual("");
  });
});
