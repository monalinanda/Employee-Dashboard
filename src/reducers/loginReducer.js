import { LOGIN_VALIDATION } from "../actions/types";

const INTIAL_STATE = {
    user: null,
  };

  const  loginFunction = (state = INTIAL_STATE, action) => {
    switch (action.type) {
      case LOGIN_VALIDATION:
        return {...state, user: action.payload };
      default:
        return state;
    }
  };

  export default loginFunction ;
