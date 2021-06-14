import data from "../../data";
/* import fetchApi from "../../fetchApi"; */
import { createAction } from "../common";

export const Types = {
  increaseQuantity: "app.cart.increaseQuantity",
  decreaseQuantity: "app.cart.decreaseQuantity",
  getAllProduct: "app.cart.getAllProduct",
  getNumberCart: "app.cart.getNumberCart",
  addCart: "app.cart.addCart",
  subtractCart: "app.cart.subtractCart",
  updateCart: "app.cart.updateCart",
  deleteCart: "app.cart.deleteCart",
  adđProduct: "app.cart.addProduct",
};
//lay tat ca products
export const getAllProduct = () => {
  return (dispatch) => {
    dispatch(createAction(Types.getAllProduct, { data }));
    console.log(data);
  };
};

//add product
export const addCart = (product) => {
  return (dispatch, getState) => {
    const cartState = getState().cart.Carts;
    const cartData = [];
    cartData.push(product);
    dispatch(createAction(Types.addCart, { cartState, data: cartData }));
  };
};
//xoa 1 cart
export const subtractCart = (product) => {
  return (dispatch, getState) => {
    const cartState = getState().cart.Carts;
    const cartData = [];
    cartData.push(product);
    dispatch(createAction(Types.subtractCart, { cartState, data: cartData }));
  };
};

//xoa
export const deleteCart = (product) => {
  return (dispatch, getState) => {
    const cartState = getState().cart.Carts;
    const cartData = [];
    cartData.push(product);
    dispatch(createAction(Types.deleteCart, { cartState, data: cartData }));
  };
};
//update
export const updateCart = (state) => (dispatch) => {
  dispatch(createAction(Types.updateCart, { state }));
};
//get number cart
export const getNumberCart = (state) => (dispatch) => {
  dispatch(createAction(Types.getNumberCart, { state }));
};
//gan gia tri vao state
export const setCartState = (state) => (dispatch) => {
  dispatch(createAction(Types.setCartState, { state }));
};

//khoi phuc state
export const cleanCartState = (stateTitle) => (dispatch) => {
  dispatch(createAction(Types.cleanCartState, { stateTitle }));
};
