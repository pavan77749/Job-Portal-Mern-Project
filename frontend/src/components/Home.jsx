import React from "react";
import Herosection from "./Herosection";
import Navbar from "./shared/Navbar";
import CategoryCarousel from "./CategoryCarousel";
import { LatestJobs } from "./LatestJobs";
import Footer from "./shared/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Herosection />
      <CategoryCarousel />
      <LatestJobs />
      <Footer />
    </>
  );
};

export default Home;
