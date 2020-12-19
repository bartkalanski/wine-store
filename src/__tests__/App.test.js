import React from "react";
import { shallow } from "enzyme";
import App from "../components/App";

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it("should render without throwing an error", () => {
    expect(wrapper).not.toBeNull();
  });
});
