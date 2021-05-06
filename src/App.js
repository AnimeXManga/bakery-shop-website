import React from 'react';

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/index'
import Product from './pages/product' 
import SignInPage from './pages/signin/signin'
import SingleProduct from './pages/SingleProducts'
import SignUpPage from './pages/signup/signup'
import './App.css';
import Cart from './pages/cart';


function App() { 
  
  return (
    
  <Router>
  <Switch>
    <div className="App">
    <Route exact path="/" component={Home}/>
    <Route exact path="/products/" component={Product}/>
    <Route exact path="/products/:slug" component={SingleProduct}/>
    <Route exact path="/signin" component={SignInPage}/>
    <Route exact path="/signup" component={SignUpPage}/>
    <Route exact path="/cart" component={Cart}/>
    </div>
    </Switch>
  </Router> 
  );
}

export default App;
