// src/pages/index.js
import React from "react";

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
      {/* Sticky header */}
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

      <main className="font-sans text-gray-800 bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-r from-teal-600 to-teal-500 text-white py-20 px-6 text-center">
          <h2 className="text-5xl font-extrabold mb-3 leading-tight">
            Danuta Koziełło-Doherty
          </h2>
          <p className="text-xl max-w-xl mx-auto">
            Psychoterapia indywidualna dorosłych – oparcie na neurobiologii i psychologii
          </p>
        </section>

        {/* O mnie */}
        <section id="about" className="py-16 px-6 max-w-4xl mx-auto scroll-mt-20">
          <h2 className="text-3xl font-semibold mb-6 text-teal-700 border-b-2 border-teal-300 pb-2">
            O mnie
          </h2>
          <p className="mb-6 leading-relaxed text-lg">
            Nazywam się Danuta Koziełło-Doherty i jestem psychologiem klinicznym oraz certyfikowanym psychoterapeutą.
            Od 1995 roku prowadzę terapię indywidualną dorosłych, opartą na wiedzy neurobiologicznej i psychologicznej.
            Specjalizuję się w pracy z traumą, teorią przywiązania oraz trudnościami wynikającymi z deficytów rozwojowych.
          </p>
          <p className="leading-relaxed text-lg">
            Moja praca oparta jest na holistycznym podejściu i głębokiej wrażliwości na potrzeby klientów, z wykorzystaniem podejścia bottom-up.
          </p>
        </section>

        {/* Kiedy na psychoterapię */}
        <section
          id="when"
          className="bg-white py-16 px-6 shadow-md max-w-4xl mx-auto rounded-lg scroll-mt-20"
        >
          <h2 className="text-3xl font-semibold mb-6 text-teal-700 border-b-2 border-teal-300 pb-2">
            Kiedy na psychoterapię
          </h2>
          <ul className="list-disc ml-6 space-y-3 text-lg text-gray-700">
            <li>Powtarzające się trudności w relacjach, pracy, codziennym funkcjonowaniu</li>
            <li>Objawy psychiczne lub fizyczne: smutek, napięcie, stres, bezsenność</li>
            <li>Trudne doświadczenia z przeszłości: trauma, strata, przemoc</li>
            <li>Poczucie samotności i niezrozumienia</li>
            <li>Brak kontaktu ze sobą i swoimi potrzebami</li>
            <li>Chęć rozwoju, samoświadomości i lepszego poznania siebie</li>
          </ul>
        </section>

        {/* Metody pracy */}
        <section
          id="methods"
          className="py-16 px-6 max-w-4xl mx-auto scroll-mt-20"
        >
          <h2 className="text-3xl font-semibold mb-6 text-teal-700 border-b-2 border-teal-300 pb-2">
            Metody pracy
          </h2>
          <p className="mb-6 text-lg">
            W pracy terapeutycznej stosuję różnorodne podejścia dopasowane do potrzeb klienta:
          </p>
          <ul className="list-disc ml-6 space-y-3 text-lg text-gray-700">
            <li>Terapia Systemu Wewnętrznej Rodziny (IFS)</li>
            <li>EMDR – przetwarzanie traumatycznych wspomnień</li>
            <li>Brainspotting – praca z niewerbalnymi wspomnieniami</li>
            <li>Somatic Experiencing – regulacja układu nerwowego</li>
            <li>Terapia Gestalt i Bioenergetyczna</li>
          </ul>
        </section>

        {/* Informacje praktyczne */}
        <section
          id="practical"
          className="bg-white py-16 px-6 shadow-md max-w-4xl mx-auto rounded-lg scroll-mt-20"
        >
          <h2 className="text-3xl font-semibold mb-6 text-teal-700 border-b-2 border-teal-300 pb-2">
            Informacje praktyczne
          </h2>
          <ul className="space-y-3 text-lg text-gray-700">
            <li><strong>Czas trwania sesji:</strong> 90 minut</li>
            <li><strong>Koszt:</strong> 50 funtów</li>
            <li><strong>Forma spotkań:</strong> online lub stacjonarnie</li>
            <li><strong>Godziny pracy:</strong> Poniedziałek–Piątek, 10:00–19:00</li>
          </ul>
        </section>

        {/* Kontakt */}
        <section
          id="contact"
          className="py-16 px-6 max-w-4xl mx-auto scroll-mt-20"
        >
          <h2 className="text-3xl font-semibold mb-6 text-teal-700 border-b-2 border-teal-300 pb-2">
            Kontakt
          </h2>
          <p className="mb-3 text-lg">📞 <a href="tel:+447792772661" className="text-teal-600 hover:underline">0044 7792772661</a></p>
          <p className="mb-3 text-lg">✉️ <a href="mailto:danuta.koziello@gmail.com" className="text-teal-600 hover:underline">danuta.koziello@gmail.com</a></p>
          <p className="text-gray-600 mt-6 italic max-w-md">
            „Terapia to nie tylko leczenie ran. To także proces odzyskiwania kontaktu ze sobą i budowania życia w zgodzie z własną prawdą.”
          </p>
        </section>

        {/* Footer */}
        <footer className="bg-teal-600 text-white py-6 text-center mt-20">
          <p className="text-sm select-none">© {new Date().getFullYear()} Danuta Koziełło-Doherty | Wszystkie prawa zastrzeżone</p>
        </footer>
      </main>
    </>
  );
};

export default IndexPage;
