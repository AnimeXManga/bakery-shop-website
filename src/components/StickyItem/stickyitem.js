import React from 'react'
import {Link} from 'react-router-dom'
import './stickyitem.css'
const stickyitem = () => {
    return (
        <>
          <Link to="/cart"><div class="cart"><a href="#"><i class="fa fa-shopping-cart"></i>Buy Theme</a></div></Link>
           <div class="mail"><a href="#"><i class="fa fa-envelope"></i>Quick Question </a></div>  
        </>
    )
}

export default stickyitem
