import Product from "./Product";
import data from "../data";

import React, { Component } from "react";

class ProductsList extends Component {
  render() {
    if (data.products.length === 0) {
      return (
        <div className="empty-search">
          <h3>unfortunately no products matched your search parameters</h3>
        </div>
      );
    }
    return (
      <section className="productslist">
        <div className="productslist-center">
          {data.products.map((item, index) => {
            return <Product key={index} product={item} />;
          })}
        </div>
      </section>
    );
  }
}

export default ProductsList;
