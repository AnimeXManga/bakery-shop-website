import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./assets/css/bootstrap.min.css";
import "./assets/css/agency.min.css";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./context";

import { createStore, compose, applyMiddleware } from "redux";
import { reducer } from "./redux/index";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));


ReactDOM.render(
  <ProductProvider >
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </ProductProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
