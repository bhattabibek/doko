import React from "react";
import Hero from "../components/Hero";
import Category from "../components/Category";
import BestSeller from "../components/BestSeller";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";

const Home = () => {
  return (
    <>
      <Topbar />
      <Hero />
      <Category />
      <BestSeller />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
