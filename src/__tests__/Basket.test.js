import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";
import * as reactRedux from "react-redux";

import Basket from "../components/routes/Basket";
import basketReducer from "../reducers/basketReducer";
import products from "../products/products.json";

const store = createStore(basketReducer);

describe("Basket", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Basket />
      </Provider>
    );
  });
  it("should render without throwing an error", () => {
    expect(wrapper).not.toBeNull();
  });
  it("should display a specified message if basket is empty", () => {
    const content = wrapper.find(".ui.center.aligned.header");
    expect(content.text()).toEqual("Your basket is empty");
  });
});
describe("Basket2", () => {
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
  let wrapper;
  beforeEach(() => {
    useSelectorMock.mockClear();
  });

  it("should render basket container", () => {
    useSelectorMock.mockReturnValue({
      items: products.items,
      itemsInBasket: [],
      total: 27.99,
      basketQuantity: 0,
    });
    wrapper = shallow(<Basket/>)

    const container = wrapper.find(".basket__container");
    expect(container).toHaveLength(1);
  });
  it("should contain a button", () => {
    useSelectorMock.mockReturnValue({
      items: products.items,
      itemsInBasket: [],
      total: 27.99,
      basketQuantity: 0,
    });
    wrapper = shallow(<Basket/>)
    expect(
      wrapper.containsMatchingElement(<button>Proceed to checkout</button>)
    ).toEqual(true);
  });
});
