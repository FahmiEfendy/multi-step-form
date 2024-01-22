import { SET_FORM, SET_PRICE, SET_STEP } from "./constant";

export const setStep = (step) => ({
  type: SET_STEP,
  step,
});

export const setForm = (form) => ({
  type: SET_FORM,
  form,
});

export const setPrice = (totalPrice) => ({
  type: SET_PRICE,
  totalPrice,
});
