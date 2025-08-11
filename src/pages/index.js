// src/pages/index.js
import React from "react";
import StickyHeader from "../sections/StickyHeader";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import HowDoIWorkSection from "../sections/HowDoIWorkSection";
import WhenSection from "../sections/WhenSection";
import MethodsSection from "../sections/MethodsSection";
import InfoSection from "../sections/InfoSection";
import FooterSection from "../sections/FooterSection";
import SpecializationSection from "../sections/SpecializationSection";


const sections = [
  { id: "about", label: "O mnie" },
  { id: "when", label: "Kiedy na psychoterapię" },
  { id: "methods", label: "Metody pracy" },
  { id: "practical", label: "Informacje praktyczne" },
  { id: "contact", label: "Kontakt" },
];

const IndexPage = () => {
  return (
    <>
      <StickyHeader />
      <main className="font-sans text-gray-700 bg-pink-50">
        <HeroSection />
        <AboutSection />
        <HowDoIWorkSection />
        <SpecializationSection />
        <MethodsSection />
        <WhenSection />
        <InfoSection />
        <FooterSection />
      </main>
    </>
  );
};

export default IndexPage;
