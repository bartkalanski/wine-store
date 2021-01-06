import React from "react";
import { configure,shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as ReactReduxHooks from '../components/helper-functions/react-redux-hooks'
import Store from "../components/routes/Store";
import basketReducer from "../reducers/basketReducer";
import products from "../products/products.json";
import StoreList from '../components/routes/StoreList'



describe("Store", () => {
let wrapper;
let store;
let mockStore;

beforeEach(()=>{
  /* real store */
  store = createStore(basketReducer);
  /* mock store */
  mockStore = configureStore()
  /* mocking useSelector on our mock store*/
  jest
       .spyOn(ReactReduxHooks, "useSelector")
       .mockImplementation(state => store.getState());
  /* shallow rendering */
  wrapper = shallow(<Provider store={store}>
    <Store store={mockStore}/>
  </Provider>)
})
it('actions', ()=>{

  expect(wrapper).not.toBeNull();
})
});
/*
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <Store />
      </Provider>
    );
  });
  it('should', ()=>{
    console.log(mount(<Store />).debug())
  })
  it("should render without throwing an error", () => {
    expect(wrapper).not.toBeNull();
  });

*/