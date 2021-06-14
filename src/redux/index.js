import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import { cartReducer as cart } from "./cart";
import { createBrowserHistory } from "history";
export const history = createBrowserHistory();

export const reducer = combineReducers({
  router: connectRouter(history),
  cart,
});