import React from "react";
import { shallow } from "enzyme";
import Store from "../components/routes/Store";

describe("Store", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Store />);
  });
  it("should render without throwing an error", () => {
    expect(wrapper).not.toBeNull();
  });
});
