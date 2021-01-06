import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";

import StoreList from "../components/routes/StoreList";
import basketReducer from "../reducers/basketReducer";

const store = createStore(basketReducer);

describe("StoreList", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <StoreList />
      </Provider>
    );
  });
  it("should render without throwing an error", () => {
    expect(wrapper).not.toBeNull();
  });
});
