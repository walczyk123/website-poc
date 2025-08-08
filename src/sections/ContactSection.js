import React from "react";

const ContactSection = () => (
  <section
    id="contact"
    className="py-16 px-6 max-w-6xl mx-auto scroll-mt-20"
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
);

export default ContactSection;