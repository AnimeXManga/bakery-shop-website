import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import StikyItem from '../components/StickyItem/stickyitem'
function Product({ product }) {
    const {name, slug, images, price} = product;

  return (

     
    <acticle className="product">
        <StikyItem/>
        <div className="img-container">
            <img src={images[0]} alt="cake"/>
            <div className="price-top">
            <h6>${price}</h6>
            <p>per one</p>
        </div>
        <Link to={`/products/${slug}`}
        className="btn-primary product-link">MORE INFOR</Link>
        </div>
        <p className="product-info">{name}</p>
        
    </acticle>
   

  );
}
export default Product;

Product.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired,
    })
   

}