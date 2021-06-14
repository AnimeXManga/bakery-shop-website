import React, { Component } from "react";
import defaultBcg from "../assets/img/wallpaper2.png";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { ProductContext } from "../context";
import Navbar from "../components/Navbar/Navbar";

import StyledHero from "../components/StyledHero";
export default class SingleProduct extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg,
    };
  }
  static contextType = ProductContext;

  // componentDidMount() {
  //   console.log(this.props);
  // }
  render() {
    const { getProduct } = this.context;
    const product = getProduct(this.state.slug);

    if (!product) {
      return (
        <div className="error">
          <h3> no such product could be found...</h3>
          <Link to="/products" className="btn-primary">
            back to products
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      chocolate,
      cheese,
      images,
    } = product;
    const [...defaultImages] = images;
    console.log(defaultImages);

    return (
      <>
        <Navbar />
        <StyledHero img={this.state.defaultBcg}>
          <Banner title={`${name} product`}>
            <Link to="/products" className="btn-primary">
              back to products
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-product">
          <div className="single-product-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-product-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : {size} SQFT</h6>
              <h6>
                max capacity :
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{cheese ? "cheese allowed" : "no cheese allowed"}</h6>
              <h6>{chocolate && "free chocolate included"}</h6>
            </article>
          </div>
        </section>
        <section className="product-extras">
          <h6>extras </h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}
