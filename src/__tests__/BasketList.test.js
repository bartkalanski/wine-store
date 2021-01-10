import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";

import BasketList from "../components/routes/BasketList";
import basketReducer from "../reducers/basketReducer";

describe("BasketList", () => {
  const state = {
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
  const mockStore = createStore(basketReducer, state);
  const getWrapper = () =>
    mount(
      <Provider store={mockStore}>
        <BasketList {...state} />
      </Provider>
    );
    it("should render without throwing an error", () => {
      const wrapper = getWrapper(mockStore);
      expect(wrapper).not.toBeNull();
    });
  it("should dispatch the correct action on button click", () => {
    mockStore.dispatch = jest.fn();

    const wrapper = getWrapper(mockStore);
    wrapper.find(".ui.negative.basic.button").simulate("click");
    expect(mockStore.dispatch).toHaveBeenCalled();
  });
  
});
