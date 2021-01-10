import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";

import StoreList from "../components/routes/StoreList";
import basketReducer from "../reducers/basketReducer";


describe("StoreList component - unit test for useSelector and useDispatch", () => {
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
        <StoreList {...state}/>
      </Provider>
    );
  it("should dispatch the correct action on button click", () => {
    mockStore.dispatch = jest.fn();

    const wrapper = getWrapper(mockStore);
    wrapper.find(".orange.ui.button").simulate("click");
    expect(mockStore.dispatch).toHaveBeenCalled()
  });
});

describe("StoreList - general unit tests", () => {
  const store = createStore(basketReducer);
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
    expect(
      wrapper.containsMatchingElement(<button>Add To Basket</button>)
    ).toEqual(true);
  });
});
