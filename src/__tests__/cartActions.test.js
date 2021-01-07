import { addToBasket } from "../actions/cartActions";

describe("cartActions", () => {
  it("should return ADD_TO_BASKET", () => {
    expect(addToBasket("ADD_TO_BASKET")).toEqual({
      id: "ADD_TO_BASKET",
      type: "ADD_TO_BASKET",
    });
  });
});
