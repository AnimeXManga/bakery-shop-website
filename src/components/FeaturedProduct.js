import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import data from "../data";

class FeaturedProduct extends Component {
  render() {
    return (
      <section className="featured-products">
        <Title title="best seller"></Title>
        <div className="featured-products-center">
          {data.products.map((item, index) => {
            if (item.fields.featured === true) {
              return <Product key={index} product={item} />;
            }
          })}
        </div>
      </section>
    );
  }
}

export default FeaturedProduct;
