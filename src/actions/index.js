import logindata from "../data/validationdata.json";
import data from "../data/data.json";
import {
   LOGIN_VALIDATION,
   FETCH_LIST
  } from "./types";

  
export const loginValidtion = () => {
    return {
      type: LOGIN_VALIDATION,
      payload: logindata,
    };
  };

  export const fetchList = () => {
    return {
      type: FETCH_LIST,
      payload: data,
    };
  };