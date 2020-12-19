import React from "react";
import { shallow } from "enzyme";
import Header from "../components/Header";

describe("Header", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });
  it("should render without throwing an error", () => {
    expect(wrapper).not.toBeNull();
  });
});
