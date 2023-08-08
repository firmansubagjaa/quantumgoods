const cart = JSON.parse(localStorage.getItem("@cart"));

export const total = () => {
  let totalPrice = 0;
  for (const item of cart) {
    totalPrice += item.price;
  }
  return totalPrice;
};