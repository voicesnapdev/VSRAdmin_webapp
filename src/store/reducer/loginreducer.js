import { LOG_IN } from "../types";
const initialState = {
  logininfo: { data: [], totalrows: 0 },
};
const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        logininfo: action.payload,
      };
    default:
      return state;
  }
};
export default LoginReducer;
