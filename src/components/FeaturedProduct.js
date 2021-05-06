import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Loading from './loading'
import Product from './Product'
import Title from './Title'
import {ProductContext} from '../context'


class FeaturedProduct extends Component {

  static contextType = ProductContext;
  render(){
    let {loading, featuredProducts: products} = this.context;

    products = products.map(product => {
    return <Product key={product.id} product={product}/>
   });

    return (
      <section className="featured-products">
        <Title title="featured products"></Title>
        <div className="featured-products-center">
          {loading?<Loading/>:products}
        </div>
      </section>
    );
  }  
}

export default FeaturedProduct
