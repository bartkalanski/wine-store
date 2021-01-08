const formatPrice = (totalPrice) => {
  const formatTotalPrice = {
    style: "currency",
    currency: "GBP",
  };
  return totalPrice.toLocaleString("en-GB", formatTotalPrice);
};

export default formatPrice;
