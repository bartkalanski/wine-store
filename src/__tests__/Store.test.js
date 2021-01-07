import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Store from "../components/routes/Store";
import basketReducer from "../reducers/basketReducer";

const store = createStore(basketReducer);
describe("Store", () => {
  let wrapper;
  const props = {
    items: [
      {
        id: 1,
        title: "Châteauneuf du Pape",
        type: "Red",
        origin: "France",
        price: "27.99",
        image: "imageTwo",
      },
    ],
  };
  wrapper = mount(
    <Provider store={store}>
      <Store {...props} />
    </Provider>
  );

  it("should render without error", () => {
    expect(wrapper).not.toBeNull();
  });
  it("should render ui container", () => {
    const container = wrapper.find(".ui.container");
    expect(container).toHaveLength(1);
  });
  it("should render ui grid", () => {
    const grid = wrapper.find(".ui.grid");
    expect(grid).toHaveLength(1);
  });
});
