import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar/Navbar";
import FeatureProduct from "../components/FeaturedProduct";
import Stickyitem from "../components/StickyItem/stickyitem";
import Services from "../components/Services";

import Contact from "../components/Contact";
import Team from "../components/Team";

const Home = () => {
  return (
    <>
      <Stickyitem />
      <Navbar />
      <Header />
      <FeatureProduct />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
