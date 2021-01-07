import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Header from "../components/Header";
import basketReducer from "../reducers/basketReducer";

const store = createStore(basketReducer);

describe("Header", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <Header />
      </Provider>
    );
  });
  it("should render without throwing an error", () => {
    expect(wrapper).not.toBeNull();
  });
});
