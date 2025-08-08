// src/pages/index.js
import React from "react";
import StickyHeader from "../sections/StickyHeader";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import WhenSection from "../sections/WhenSection";
import MethodsSection from "../sections/MethodsSection";
import InfoSection from "../sections/InfoSection";
import ContactSection from "../sections/ContactSection";
import FooterSection from "../sections/FooterSection";


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
      <main className="font-sans text-gray-800 bg-gray-50">
        <HeroSection />
        <AboutSection />
        <WhenSection />
        <MethodsSection />
        <InfoSection />
        <ContactSection />
        <FooterSection />
      </main>
    </>
  );
};

export default IndexPage;
