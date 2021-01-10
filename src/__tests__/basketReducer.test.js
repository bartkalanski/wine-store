import basketReducer from "../reducers/basketReducer";
import products from "../products/products.json";
import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "../actions/cartActions";

describe("basketReducer", () => {
  let initState = {
    basketQuantity: 0,
    items: products.items,
    itemsInBasket: [],
    total: 0,
  };
  it("has a default state", () => {
    expect(basketReducer(undefined, { type: "unexpected" })).toEqual(initState);
  });
  it("can handle ADD_TO_BASKET", () => {
    let state = {
      basketQuantity: 1,
      items: initState.items,
      itemsInBasket: [{ quantity: 1 }],
      total: NaN,
    };
    expect(basketReducer(undefined, { type: "ADD_TO_BASKET" })).toEqual(state);
  });
  xit("can handle REMOVE_FROM_BASKET", () => {
    let itemsInBaske = [
      {
        ...products.items[0],
        quantity: 1,
      },
    ];
    expect(
      basketReducer(
        {
          basketQuantity: 1,
          itemsInBasket: [...itemsInBaske],
          quantity: 1,
          total: "27.99",
        },
        { type: REMOVE_FROM_BASKET, id: 1 }
      )
    ).toEqual();
  });
});
