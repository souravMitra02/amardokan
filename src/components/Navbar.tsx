"use client";

import Link from "next/link";
import { ShoppingCart, Search, User, Menu, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="bg-[#e21b1b] text-white py-1.5 px-4 text-xs flex justify-between items-center hidden md:flex font-medium">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <MapPin size={14} /> <span>Delivery: 16469 (Inside Dhaka)</span>
          </div>
          <div className="flex items-center gap-1">
            <Phone size={14} /> <span>Contact: info@amardokan.com</span>
          </div>
        </div>
        <div className="flex gap-4 uppercase tracking-wider">
          <Link href="/" className="hover:underline">Offers</Link>
          <Link href="/" className="hover:underline">Help</Link>
        </div>
      </div>
      <nav className="bg-[#f8f8f8] border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center gap-4 md:gap-8">
          
          <Link href="/" className="flex-shrink-0">
            <span className="text-3xl font-black text-[#e21b1b] italic">
              Amar<span className="text-[#facc15]">Dokan</span>
            </span>
          </Link>
          <div className="hidden md:flex flex-1 relative group">
            <input 
              type="text" 
              placeholder="Search for groceries, electronics or more..." 
              className="w-full border-2 border-gray-200 rounded-full py-2.5 px-6 outline-none focus:border-[#e21b1b] transition-all text-sm shadow-sm"
            />
            <button className="absolute right-0 top-0 h-full bg-[#e21b1b] text-white px-6 rounded-r-full hover:bg-red-700 transition">
              <Search size={20} />
            </button>
          </div>

          <div className="flex items-center gap-3 md:gap-6">
           <div className="hidden lg:flex items-center gap-3 border-2 border-gray-100 px-4 py-1.5 rounded-full cursor-pointer hover:border-[#e21b1b] hover:bg-red-50 transition-all duration-300 group">
  <User size={18} className="text-gray-400 group-hover:text-[#e21b1b]" />
  
  <div className="flex flex-col items-start leading-tight">
    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">
      Welcome
    </span>
    <span className="text-xs font-black text-gray-700 group-hover:text-[#e21b1b]">
      Login / Register
    </span>
  </div>
</div>
            <button className="flex items-center gap-2 bg-[#facc15] hover:bg-[#eab308] px-4 py-2.5 rounded-full transition shadow-sm group">
              <div className="relative">
                <ShoppingCart size={22} className="text-gray-900" />
                <span className="absolute -top-3 -right-3 bg-[#e21b1b] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-[#facc15]">
                  0
                </span>
              </div>
              <span className="hidden sm:inline font-bold text-gray-900 text-sm">$0.00</span>
            </button>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t p-4 space-y-4 shadow-xl">
             <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full border rounded-lg py-2 px-4 outline-none focus:border-[#e21b1b]"
                />
                <Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
             </div>
             <div className="grid grid-cols-2 gap-4">
                <Link href="/" className="p-3 bg-gray-50 rounded text-center font-bold text-sm">Offers</Link>
                <Link href="/" className="p-3 bg-gray-50 rounded text-center font-bold text-sm">Categories</Link>
             </div>
          </div>
        )}
      </nav>
    </header>
  );
}