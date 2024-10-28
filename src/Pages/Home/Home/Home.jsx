import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Service from "../Services/Service";
import Features from "../Features/Features";
import Footer from "../../Shared/Footer";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Service />
      <Contact />
      <Features />
    </div>
  );
};

export default Home;
