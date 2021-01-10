import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Basket from "../components/routes/Basket";
import reducer from "../reducers/basketReducer";

describe("Basket component - something in the basket", () => {
  let state = {
    itemsInBasket: [
      {
        id: 1,
        title: "Châteauneuf du Pape",
        type: "Red",
        origin: "France",
        price: "27.99",
        image: "imageTwo",
        quantity: 1,
      },
    ],
    total: 27.99,
  };
  const mockStore = createStore(reducer, state);
  const getWrapper = () =>
    mount(
      <Provider store={mockStore}>
        <Basket />
      </Provider>
    );
  it("should render without throwing an error", () => {
    const wrapper = getWrapper();
    expect(wrapper).not.toBeNull();
  });
  it("should render the quantity of products in the basket", () => {
    const wrapper = getWrapper();
    expect(wrapper.find(".basket__container")).toHaveLength(1);
  });
  it("should rended the total price", () => {
    const wrapper = getWrapper();
    expect(wrapper.find(".total__price").text()).toBe("Total to pay: £27.99");
  });
});
describe("Basket component - empty basket", () => {
  let state = {
    itemsInBasket: [],
    total: 0.00,
  };
  const mockStore = createStore(reducer, { state });
  const getWrapper = () =>
    mount(
      <Provider store={mockStore}>
        <Basket />
      </Provider>
    );

  it("should not render basket container if there are no items in the Basket", () => {
    const wrapper = getWrapper();
    expect(wrapper.find(".basket__container")).toHaveLength(0);
  });
  it("should specific message if basket is empty", () => {
    const wrapper = getWrapper();
    expect(wrapper.find(".ui.center.aligned.header").text()).toBe("Your basket is empty");
  });

});
