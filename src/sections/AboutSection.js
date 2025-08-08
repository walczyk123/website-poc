import React from "react";
import portrait from "../images/portrait.webp";

const AboutSection = () => (
  <section id="about" className="py-16 px-6 max-w-6xl mx-auto scroll-mt-20">
    <h2 className="text-3xl font-semibold mb-6 text-teal-700 border-b-2 border-teal-300 pb-2">
      O mnie
    </h2>

    <div className="flex flex-col md:flex-row items-start md:items-center gap-8 items-center">
      {/* Text */}
      <div className="md:w-1/2">
        <p className="mb-6 leading-relaxed text-lg">
          Nazywam się Danuta Koziełło-Doherty i jestem psychologiem klinicznym oraz certyfikowanym psychoterapeutą.
          Od 1995 roku prowadzę terapię indywidualną dorosłych, opartą na wiedzy neurobiologicznej i psychologicznej.
          Specjalizuję się w pracy z traumą, teorią przywiązania oraz trudnościami wynikającymi z deficytów rozwojowych.
        </p>
        <p className="leading-relaxed text-lg">
          Moja praca oparta jest na holistycznym podejściu i głębokiej wrażliwości na potrzeby klientów,
          z wykorzystaniem podejścia bottom-up.
        </p>
      </div>

      {/* Photo */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={portrait}
          alt="Danuta Koziełło-Doherty"
          className="w-full max-w-sm object-cover"
        />
      </div>
    </div>
  </section>
);

export default AboutSection;
