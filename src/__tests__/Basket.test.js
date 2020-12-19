import React from "react";
import { shallow } from "enzyme";
import Basket from "../components/routes/Basket";

describe("Basket", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Basket />);
  });
  it("should render without throwing an error", () => {
    expect(wrapper).not.toBeNull();
  });
});
