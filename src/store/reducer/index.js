import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import loginreducer from "./loginreducer";
import appreducer from "./appreducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["loginreducer"],
};
const rootReducer = combineReducers({
  loginreducer: loginreducer,
  appreducer: appreducer,
});

export default persistReducer(persistConfig, rootReducer);
