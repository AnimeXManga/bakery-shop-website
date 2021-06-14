import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/index";
import Product from "./pages/product";
import SignInPage from "./pages/signin/signin";
import SingleProduct from "./pages/SingleProducts";
import SignUpPage from "./pages/signup/signup";
import Payment from './pages/payment'
import "antd/dist/antd.css";
import "./App.css";
import Cart from "./pages/cart";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products/" component={Product} />
          <Route exact path="/products/:slug" component={SingleProduct} />
          <Route exact path="/signin" component={SignInPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/payment" component={Payment}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
