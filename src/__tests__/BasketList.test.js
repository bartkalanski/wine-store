import React from "react";
import * as reactRedux from 'react-redux'
import { shallow } from "enzyme";


import BasketList from "../components/routes/BasketList";

describe("BasketList", () => {
  let wrapper;
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')

  const item = [
    {
      image: "image",
      title: "title",
      origin: "origin",
      price: "0.00",
    },
  ];

  beforeEach(() => {
    wrapper = shallow(<BasketList items={item} />);
    useDispatchMock.mockClear()
  });
  it("should render without throwing an error", () => {
    expect(wrapper).not.toBeNull();
  });
  it("should fire useDispatch hook", () => {
    const dummyDispatch = jest.fn()
    useDispatchMock.mockReturnValue(dummyDispatch)
    expect(dummyDispatch).not.toHaveBeenCalled()
  })
});
