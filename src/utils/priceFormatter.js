export const priceFormatter = (price, plus = false) => {
  return `${plus ? "+" : ""}` + "$" + String(price) + "/mo";
};
