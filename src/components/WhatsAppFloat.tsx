"use client";

import Image from "next/image";
import Link from "next/link";

export default function WhatsAppFloat() {
  const phoneNumber = "01891883223";
  const message = "Hello, I want to know more about your products!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-6 z-[999] transition-all duration-300 hover:scale-110 active:scale-95 drop-shadow-2xl group"
    >
      <div className="absolute bottom-full right-0 mb-3 bg-white text-gray-800 text-xs font-bold py-1.5 px-3 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-gray-100 whitespace-nowrap">
        Chat with us!
      </div>

      <div className="relative w-20 h-20 "> 
        <Image 
          src="/whatsapp.png"
                  alt="WhatsApp Contact"
                  width={50}
                  height={50}
          className="object-contain drop-shadow-lg"
        />
      </div>

      <span className="absolute top-0 right-6 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white"></span>
      </span>
    </Link>
  );
}