import { FETCH_LIST } from "../actions/types";

const INTIAL_STATE = {
    userLists: null,
  };

 const dashboardFunction = (state = INTIAL_STATE, action) => {
    switch (action.type) {
      case  FETCH_LIST:
        return {...state, userLists: action.payload };
      default:
        return state;
    }
  };

  export default dashboardFunction ;