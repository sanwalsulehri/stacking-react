import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StackingWorks from "../components/StackingWorks";
import CorePrinciples from "../components/CorePrinciples";
import Networks from "../components/Networks";
import FAQs from "../components/FAQs";
import Earning from "../components/Earning";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <StackingWorks />
      <Earning />
      <CorePrinciples />
      <Networks />
      <FAQs />
    </>
  );
};

export default Home;
