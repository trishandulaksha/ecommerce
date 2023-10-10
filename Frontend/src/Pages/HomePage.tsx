import React, { useState, useEffect } from "react";
import NavBar from "../Component/NavBar/NavBar";
import { MainBanner } from "../Component/MainBanner/MainBanner";
import DealsSection from "../Component/Sections/Deals/DealsSection";
import MainAdvertiestment from "../Component/Advertiestment/MainAdvertiestment/MainAdvertiestment";
import AllNewArrivals from "../Component/Sections/NewArrivals/AllArrivals/AllNewArrivals";
import InsterAdvertiestment from "../Component/Advertiestment/InsterAdvertiestment/InsterAdvertiestment";
import CustomerFeedBack from "../Component/CustomerFeedBack/CustomerFeedBack";
import Subscription from "../Component/Subscription/Subscription";
import { Footer } from "../Component/Footer/Footer";
import Context from "../Component/Sections/NewArrivals/Slides/ShoppingCart/Context/Context";
import { scroller, Element } from "react-scroll";

 

const HomePage = () => {
  const [currentSection, setCurrentSection] = useState("mainBanner");

  const handleSectionClick = (sectionName:string) => {
    setCurrentSection(sectionName);

    // Scroll to the selected section
    scrollToSection(sectionName);
  };

  const scrollToSection = (sectionName:string) => {
    // Scroll to the section with the specified name
    scroller.scrollTo(sectionName, {
      duration: 1000, // You can adjust the duration as needed
      smooth: "easeInOutQuart",
      offset: -70, // You can adjust the offset if needed (to account for your fixed navbar)
    });
  };

  useEffect(() => {
    // Handle initial scroll to the current section
    scrollToSection(currentSection);
  }, [currentSection]);

  return (
    <>
      <NavBar onSectionClick={handleSectionClick} />
      <Element name="mainBanner">
        <MainBanner />
      </Element>
      <Element name="dealsSection">
        <DealsSection />
      </Element>
      <Element name="package">
        <MainAdvertiestment />
      </Element>
      <Element name="newArrivals">
        <AllNewArrivals />
      </Element>
      <InsterAdvertiestment />
      <CustomerFeedBack />
      <Subscription />
      <Footer />
    </>
  );
};

export default HomePage;
