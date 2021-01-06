import React from "react";
import { shallow } from "enzyme";
import BasketList from "../components/routes/BasketList";

describe("BasketList", () => {
  let wrapper;

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
  });
  it("should render without throwing an error", () => {
    expect(wrapper).not.toBeNull();
  });
});
