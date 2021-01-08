import React from "react";
import { shallow } from "enzyme";

import * as reactRedux from "react-redux";

import Header from "../components/Header";
import { Link } from "react-router-dom";

describe("Header", () => {
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
  let wrapper;

  beforeEach(() => {
    useSelectorMock.mockClear();
    wrapper = shallow(<Header />);
  });
  it("should render without throwing an error", () => {
    expect(wrapper).not.toBeNull();
  });
  it("should render Basket Link tag", () => {
    expect(
      wrapper.containsMatchingElement(<Link to="/basket">Basket</Link>)
    ).toEqual(true);
  });
  it("should not render any numbers over basket if no items in the basket are available", () => {
    const basket = wrapper.find(".shopping__basket-items");
    expect(basket.text()).toBe("");
  });
  it("should render number of items in the basket", () => {
    useSelectorMock.mockReturnValue({ basketQuantity: 2 })
    const basket = wrapper.find(".shopping__basket-items");
    expect(basket.text()).toBe(1);
  });
});
