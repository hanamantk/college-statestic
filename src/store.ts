import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import statReducer from "./reducers/statReducer";

const composeEnhancer =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(statReducer, composeEnhancer(applyMiddleware(thunk)));
export default store;
