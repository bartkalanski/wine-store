import basketReducer from "../reducers/basketReducer";

describe("basketReducer", () => {
  it("has a default state", () => {
    let initState = {
      basketQuantity: 0,
      items: [
        {
          id: 1,
          image: "imageTwo",
          origin: "France",
          price: "27.99",
          title: "Châteauneuf du Pape",
          type: "Red",
        },
        {
          id: 2,
          image: "imageOne",
          origin: "Portugal",
          price: "7.99",
          title: "Porta 6",
          type: "Red",
        },
        {
          id: 3,
          image: "imageFour",
          origin: "Spain",
          price: "14.99",
          title: "Rioja",
          type: "Red",
        },
        {
          id: 4,
          image: "imageThree",
          origin: "Germany",
          price: "9.99",
          title: "Riesling",
          type: "White",
        },
      ],
      itemsInBasket: [],
      total: 0,
    };
    expect(basketReducer(undefined, { type: "unexpected" })).toEqual(initState);
  });
  it("can handle ADD_TO_BASKET", () => {
    let initState = {
      basketQuantity: 1,
      items: [
        {
          id: 1,
          image: "imageTwo",
          origin: "France",
          price: "27.99",
          title: "Châteauneuf du Pape",
          type: "Red",
        },
        {
          id: 2,
          image: "imageOne",
          origin: "Portugal",
          price: "7.99",
          title: "Porta 6",
          type: "Red",
        },
        {
          id: 3,
          image: "imageFour",
          origin: "Spain",
          price: "14.99",
          title: "Rioja",
          type: "Red",
        },
        {
          id: 4,
          image: "imageThree",
          origin: "Germany",
          price: "9.99",
          title: "Riesling",
          type: "White",
        },
      ],
      itemsInBasket: [{ quantity: 1 }],
      total: NaN,
    };
    expect(basketReducer(undefined, { type: "ADD_TO_BASKET" })).toEqual(
      initState
    );
  });
});