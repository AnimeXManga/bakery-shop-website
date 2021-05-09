import React from 'react'

const Services = () => {
    return (
        <>
            <section className="page-section" id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Services</h2>
          <h3 className="section-subheading text-muted">The services we provide</h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Direct delivery</h4>
          <p className="text-muted">E-commerce delivery service, nationwide fast delivery, free COD collection, free re-delivery, free return.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-credit-card fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Cake</h4>
          <p className="text-muted">Support 3 forms of payment including: payment on the side of goods (COD), payment by domestic ATM card and payment via credit card.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-birthday-cake fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Cake Decoration</h4>
          <p className="text-muted">Receive high-end ice cream cake decoration upon request: birthday cake, cradle cake, happy life cake, company anniversary cake, birthday jelly cake, corn cream cake, ice cream cake.</p>
        </div>
      </div>
    </div>
  </section>
        </>
    )
}

export default Services
