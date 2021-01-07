import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";

import StoreList from "../components/routes/StoreList";
import basketReducer from "../reducers/basketReducer";

const store = createStore(basketReducer);

describe("StoreList", () => {
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

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <StoreList {...props} />
      </Provider>
    );
  });
  it("should render without throwing an error", () => {
    expect(wrapper).not.toBeNull();
  });
  it("should render ui column", () => {
    const column = wrapper.find(".six.wide.column");
    expect(column).toHaveLength(1);
  });
  it("should render ui card", () => {
    const card = wrapper.find(".ui.card");
    expect(card).toHaveLength(1);
  });
  it("should contain a button", () => {
    expect(wrapper.containsMatchingElement(<button>Add To Basket</button>)).toEqual(true);
  });
});
