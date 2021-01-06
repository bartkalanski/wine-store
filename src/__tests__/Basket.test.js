import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Basket from "../components/routes/Basket";
import basketReducer from "../reducers/basketReducer";

const store = createStore(basketReducer);

describe("Basket", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <Basket />
      </Provider>
    );
  });
  it("should render without throwing an error", () => {
    expect(wrapper).not.toBeNull();
  });
});
