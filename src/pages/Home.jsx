import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StackingWorks from "../components/StackingWorks";
import CorePrinciples from "../components/CorePrinciples";
import Networks from "../components/Networks";
import FAQs from "../components/FAQs";
import Earning from "../components/Earning";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
    <div className="bg-[#10141B] text-white min-h-screen w-full">
      <Navbar />
      <Hero />
      <StackingWorks />
      <Earning />
      <CorePrinciples />
      <Networks />
      <FAQs />
      <Footer />
      </div>
    </>
  );
};

export default Home;
