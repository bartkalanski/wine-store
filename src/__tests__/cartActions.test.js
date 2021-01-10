import { addToBasket, removeFromBasket } from "../actions/cartActions";

describe("cartActions", () => {
  it("should return ADD_TO_BASKET", () => {
    expect(addToBasket("ADD_TO_BASKET")).toEqual({
      id: "ADD_TO_BASKET",
      type: "ADD_TO_BASKET",
    });
  });
  it("should return REMOVE_FROM_BASKET", () => {
    expect(removeFromBasket("REMOVE_FROM_BASKET")).toEqual({
      id: "REMOVE_FROM_BASKET",
      type: "REMOVE_FROM_BASKET",
    });
  });
});
