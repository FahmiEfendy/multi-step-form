export const priceFormatter = (price, plus = false, year = false) => {
  return `${plus ? "+" : ""}` + "$" + String(price) + `${year ? "/yr" : "/mo"}`;
};
