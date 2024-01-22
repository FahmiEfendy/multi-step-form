import { combineReducers } from "redux";
import homeReducer from "../pages/Home/reducer";

const rootReducer = combineReducers({
  homeReducer: homeReducer,
});

export default rootReducer;
