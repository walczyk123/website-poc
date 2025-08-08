import React from "react";

const sections = [
  { id: "about", label: "O mnie" },
  { id: "when", label: "Kiedy na psychoterapię" },
  { id: "methods", label: "Metody pracy" },
  { id: "practical", label: "Informacje praktyczne" },
  { id: "contact", label: "Kontakt" },
];

const StickyHeader = () => (
  <header className="sticky top-0 bg-gradient-to-r from-teal-600 to-teal-700 shadow-lg z-50 border-b border-teal-800">
  <nav className="max-w-6xl mx-auto flex justify-between items-center py-5 px-8">
      <h1
      className="text-white text-2xl font-semibold cursor-pointer select-none hover:text-teal-300 transition-colors duration-300 mb-0"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
      Danuta Koziełło-Doherty
      </h1>
      <ul className="flex space-x-4 font-medium text-sm mb-0">
      {sections.map(({ id, label }) => (
          <li key={id} className="mb-0">
          <button
              onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
              className="bg-white text-teal px-4 py-2 rounded-md shadow-sm hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors duration-300"
          >
              {label}
          </button>
          </li>
      ))}
      </ul>
  </nav>
  </header>
);

export default StickyHeader;