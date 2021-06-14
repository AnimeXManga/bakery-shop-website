import { Link } from "react-router-dom";
import StikyItem from "../components/StickyItem/stickyitem";
import { connect } from "react-redux";
import React, { Component } from "react";
import { addCart } from "../redux/cart/cart-actions";

const mapStateToProps = (state) => ({
  Carts: state.cart.Carts,
});

const mapDispatchToProps = {
  addCart,
};

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  addCart = (product) => {
    this.props.addCart(product);
  }

  render() {
    const { product } = this.props;
    const info = product.fields;
    if (info) {
      return (
        <article className="product">
          <StikyItem />
          <div className="img-container">
            <img src={info.images[0].fields.file.url} alt="cake" />
            <div className="price-top">
              <h6>${info.price}</h6>
              <p>per one</p>
            </div>
            <Link
              to={`/products/${info.slug}`}
              className="btn-primary product-link"
            >
              MORE INFOR
            </Link>
          </div>
          <div className="product-info">
            <div className="row">
              <p className="col-sm">{info.name}</p>
            </div>
            <div className="product-button row justify-content-end">
              <button className="col-7 btn btn-primary">Buy now</button> <br />
              <i
                className="col-4 fa fa-cart-plus"
                style={{ cursor: "pointer" }}
                onClick={() => this.addCart(product)}
              ></i>
            </div>
          </div>
        </article>
      );
    } else {
      return <div></div>;
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
