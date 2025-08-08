import React from "react";

const InfoSection = () => (
<section
  id="practical"
  className="bg-white py-16 px-6 shadow-md max-w-6xl mx-auto rounded-lg scroll-mt-20"
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
);

export default InfoSection;