import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import dashboardReducer from "./dashboardReducer";

export default combineReducers({
  auth: loginReducer,
  employeList: dashboardReducer
});