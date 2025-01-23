import { LOAD_COMPANY } from "../types";
const initialState = {
  companyinfo: { status: 0, message: "", totalrows: 0, resutlSet: {} },
};
const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COMPANY:
      return {
        ...state,
        companyinfo: action.payload,
      };
    default:
      return state;
  }
};
export default AppReducer;
