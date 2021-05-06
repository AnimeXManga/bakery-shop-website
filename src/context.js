import React, { Component } from "react";
import items from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    sortedProducts: [],
    featuredProducts: [],
    loading: true,
    //
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };
  //get data

  componentDidMount() {
    //this.getdata
    let products = this.formatData(items);
    let featuredProducts = products.filter(
      (product) => product.featured === true
    );

    let maxPrice = Math.max(...products.map((item) => item.price));
    let maxSize = Math.max(...products.map((item) => item.size));

    this.setState({
      products,
      featuredProducts,
      sortedProducts: products,
      loading: false,
      //
      price: maxPrice,
      maxPrice,
      maxSize,
    });
  }

  formatData(items) {
    let tempProducts = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);

      let product = { ...item.fields, images, id };
      return product;
    });
    return tempProducts;
  }

  getProduct = (slug) => {
    let tempProducts = [...this.state.products];
    const product = tempProducts.find((product) => product.slug === slug);
    return product;
  };
  //
  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(name, value);

    this.setState(
      {
        [name]: value,
      },
      this.filterProducts
    );
  };
  filterProducts = () => {
    let {
      products,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets,
    } = this.state;

    let tempProducts = [...products];
    // transform values
    // get capacity
    capacity = parseInt(capacity);
    price = parseInt(price);
    // filter by type
    if (type !== "all") {
      tempProducts = tempProducts.filter((product) => product.type === type);
    }
    // filter by capacity
    if (capacity !== 1) {
      tempProducts = tempProducts.filter(
        (product) => product.capacity >= capacity
      );
    }
    // filter by price
    tempProducts = tempProducts.filter((product) => product.price <= price);
    //filter by size
    tempProducts = tempProducts.filter(
      (product) => product.size >= minSize && product.size <= maxSize
    );
    //filter by breakfast
    if (breakfast) {
      tempProducts = tempProducts.filter(
        (product) => product.breakfast === true
      );
    }
    //filter by pets
    if (pets) {
      tempProducts = tempProducts.filter((product) => product.pets === true);
    }
    this.setState({
      sortedProducts: tempProducts,
    });
  };

  //
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          getProduct: this.getProduct,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };

export function withProductConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <ProductConsumer>
        {(value) => <Component {...props} context={value} />}
      </ProductConsumer>
    );
  };
}
