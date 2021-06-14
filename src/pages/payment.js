import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import React, { Component } from "react";
import { MyStepForm } from "../components/payment/MyStepForm";

export default class Payment extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <div className="payment">
            <MyStepForm />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
