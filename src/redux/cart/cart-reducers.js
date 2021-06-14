import produce from "immer";
import { CartState } from "./cart-initial-state";
import { commonHandler } from "../common";
import { Types } from "./cart-actions";
import _ from "lodash";

const rawCartReducer = (state, action) => {
  state = commonHandler(state, action, CartState);
  const data = action.data;
  switch (action.type) {
    case Types.getAllProduct:
      _.set(state, "_products", data.data);
      return state;

    case Types.addCart:
      const arr = data.cartState.concat(data.data);
      arr
        .sort((a, b) => a.sys.id - b.sys.id)
        .map((item, index) => {
          const newObj = { ...arr[index], quantity: arr[index].quantity || 1 };
          arr.splice(index, 1, newObj);
        });

      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i].sys.id === arr[i + 1].sys.id) {
          const newObj = { ...arr[i], quantity: arr[i].quantity + 1 };
          arr.splice(i, 2, newObj);
          break;
        }
      }

      console.log(arr);

      _.set(state, "Carts", arr);
      return state;
    case Types.subtractCart:
      const array = data.cartState.concat(data.data);
      array
        .sort((a, b) => a.sys.id - b.sys.id)
        .map((item, index) => {
          const newObj = {
            ...array[index],
            quantity: array[index].quantity || 1,
          };
          array.splice(index, 1, newObj);
        });

      for (let i = 0; i < array.length - 1; i++) {
        if (array[i].sys.id === array[i + 1].sys.id) {
          const newObj = { ...array[i], quantity: array[i].quantity - 1 };
          array.splice(i, 2, newObj);
          break;
        }
      }

      console.log(array);

      _.set(state, "Carts", array);
      return state;
      case Types.deleteCart: 
      const arr3 = data.cartState.concat(data.data);
      arr3
      .sort((a, b) => a.sys.id - b.sys.id)
      .map((item, index) => {
        const newObj = {
          ...arr3[index],
          quantity: arr3[index].quantity || 1,
        };
        arr3.splice(index, 1, newObj);
      });

      for (let i = 0; i < arr3.length - 1; i++) {
        if (arr3[i].sys.id === arr3[i + 1].sys.id) {
          arr3.splice(i, 2);
          break;
        }
      }

      console.log(arr3); 

      _.set(state, "Carts", arr3);
      return state;
    case Types.getNumberCart:
      /*  _.set(state,"numberCart",data.data); */
      return state;
    case Types.increaseQuantity:
      _.set(state, "numberCart", state.numberCart++);
      _.set(state, "Carts", state.Cart[data.data].quantiny++);
      return state;
    case Types.setCartState:
      const stateUpdate = data.state;
      for (const key in stateUpdate) {
        state = _.set(state, key, stateUpdate[key]);
      }
      return state;
    // case Types.addCart:
    //   if (state.numberCart === 0) {
    //     let cart = {
    //       id: action.payload.id,
    //       quantity: 1,
    //       name: action.payload.name,
    //       image: action.payload.image,
    //       price: action.payload.price,
    //     };
    //     state.Carts.push(cart);
    //   } else {
    //     let check = false;
    //     state.Carts.map((item, key) => {
    //       if (item.id === action.payload.id) {
    //         state.Carts[key].quantity++;
    //         check = true;
    //       }
    //     });
    //     if (!check) {
    //       let _cart = {
    //         id: action.payload.id,
    //         quantity: 1,
    //         name: action.payload.name,
    //         image: action.payload.image,
    //         price: action.payload.price,
    //       };
    //       state.Carts.push(_cart);
    //     }
    //   }
    //   _.set(state, "numberCart", state.numberCart + 1);
    //   return state;
    case Types.cleanCartState:
      state = _.set(state, data.stateTitle, CartState[data.stateTitle]);
      return state;

    default:
      return state;
  }
};
export const cartReducer = produce(rawCartReducer, CartState);
