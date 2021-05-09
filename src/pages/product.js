import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import ProductsContainer from '../components/ProductsContainer'
import {Link} from 'react-router-dom'
const product = () => {
    return (
        <div>
            <Navbar/>
            <Hero hero="productsHero">
                <Banner title="Our Cakes">
                    <Link to="/" className="btn-primary">
                        return home
                    </Link>
                </Banner>
                </Hero>
            <ProductsContainer/>
        </div>
    )
}

export default product
