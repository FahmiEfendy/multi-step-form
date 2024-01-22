import { produce } from "immer";
import { SET_FORM, SET_PRICE, SET_STEP } from "./constant";

export const initialState = {
  step: 1,
  form: {
    info: {
      name: "",
      email: "",
      phone: "",
    },
    plan: {
      option: "",
      price: 0,
      isMonthlyPlan: true,
    },
    addOns: [],
  },
  totalPrice: 0,
};

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_STEP:
        draft.step = action.step;
        break;
      case SET_FORM:
        draft.form = action.form;
        break;
      case SET_PRICE:
        draft.totalPrice = action.totalPrice;
        break;
      default:
        break;
    }
  });

export default homeReducer;
