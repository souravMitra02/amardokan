"use client";

import { MessageCircle } from "lucide-react";
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
      className="fixed bottom-6 right-6 z-[999] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group flex items-center gap-2"
    >
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold text-sm">
        Contact Us
      </span>
      <MessageCircle size={28} fill="currentColor" />
      <span className="absolute top-0 right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border-2 border-white"></span>
      </span>
    </Link>
  );
}