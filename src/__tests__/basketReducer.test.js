import basketReducer from "../reducers/basketReducer";
import products from "../products/products.json";
import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "../actions/cartActions";

describe("basketReducer", () => {
  let initState = {
    items: products.items,
    itemsInBasket: [],
    total: 0,
    basketQuantity: 0,
  };
  it("has a default state", () => {
    expect(basketReducer(undefined, { type: "unexpected" })).toEqual(initState);
  });
  it("can handle ADD_TO_BASKET", () => {
    let basketState = {
      items: initState.items,
      itemsInBasket: [{ ...products.items[0], quantity: 1 }],
      basketQuantity: 1,
      total: 27.99,
    };
    expect(basketReducer(initState, { type: "ADD_TO_BASKET", id: 1 })).toEqual(
      basketState
    );
  });
  it("can handle ADD_TO_BASKET if item is already in the basket", () => {
    let basketState = {
      items: initState.items,
      itemsInBasket: [{ ...products.items[0], quantity: 2 }],
      basketQuantity: 1,
      total: 27.99,
    };
    expect(
      basketReducer(
        {
          ...initState,
          itemsInBasket: [{ ...products.items[0], quantity: 1 }],
        },
        { type: "ADD_TO_BASKET", id: 1 }
      )
    ).toEqual(basketState);
  });
  it("can handle REMOVE_FROM_BASKET", () => {
    let basketState = {
      ...initState,
      itemsInBasket: [
        { ...products.items[1], quantity: 1 },
        { ...products.items[0], quantity: 1 },
      ],
      total: 35.98,
      basketQuantity: 2,
    };
    expect(
      basketReducer(basketState, { type: "REMOVE_FROM_BASKET", id: 1 })
    ).toEqual({
      ...initState,
      items: products.items,
      itemsInBasket: [{ ...products.items[1], quantity: 1 }],
      total: 7.989999999999998,
      basketQuantity: 1,
    });
  });
});
