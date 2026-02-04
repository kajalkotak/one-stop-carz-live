// app/components/WhatsAppButton.tsx

"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phone = "+919429805368";
  const message = "Hello, I want to book a car service.";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 h-14 w-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center z-50 transition"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
