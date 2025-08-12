import React from "react";
import Navbar from "../Components/Navbar";
import HeroBanner from "../Components/HeroSection";
import Portfolio from "../Components/Portfolio";
// import Navbar from "../components/Navbar";
// import HeroSection from "../components/HeroSection";
// import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroBanner/>
            <Portfolio />

        </>
    );
};

export default Home;