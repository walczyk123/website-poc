import React from "react";

const MethodsSection = () => (
  <section
    id="methods"
    className="py-16 px-6 max-w-6xl mx-auto scroll-mt-20"
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
);

export default MethodsSection;