"use client";

import Link from "next/link";
import { ShoppingCart, Search, User, Menu, MapPin, ChevronDown, Smartphone, Phone, Filter } from "lucide-react";
import { useState } from "react";
interface NavbarProps {
  onCategoryChange: (category: string) => void;
  currentCategory: string;
}

export default function Navbar({ onCategoryChange, currentCategory }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const categories = [
    { id: "all", label: "All Products" },
    { id: "electronics", label: "Electronics" },
    { id: "jewelery", label: "Jewelery" },
    { id: "men's clothing", label: "Men's Clothing" },
    { id: "women's clothing", label: "Women's Clothing" },
  ];

  return (
    <header className="w-full font-sans sticky top-0 z-50 shadow-md">
      <div className="bg-[#e21b1b] text-white py-3 px-4">
        <div className="max-w-[1400px] mx-auto flex items-center gap-4 lg:gap-6">
          <Link href="/" className="flex-shrink-0">
            <div className="bg-white p-1 rounded-sm">
              <span className="text-2xl font-black text-[#e21b1b] px-1 italic">
                Amar<span className="text-black">Dokan</span>
              </span>
            </div>
          </Link>

          <div className="flex-1 flex items-center">
            <div className="flex w-full bg-white rounded-md overflow-hidden shadow-md">
              <input 
                type="text" 
                placeholder="Search your products..." 
                className="w-full py-2.5 px-4 text-gray-800 outline-none text-sm"
              />
              <button className="bg-[#facc15] hover:bg-[#eab308] text-gray-900 px-5 transition-colors">
                <Search size={20} strokeWidth={3} />
              </button>
            </div>
          </div>

          <div className="hidden xl:flex items-center gap-4">
            <div className="flex items-center gap-2 bg-[#facc15] text-gray-900 px-3 py-1.5 rounded-md font-bold text-xs cursor-pointer hover:scale-105 transition shadow-sm">
              <Smartphone size={16} />
              <span>Download App Now</span>
            </div>
            <Link href="/login" className="flex items-center gap-2 border border-white/40 px-4 py-1.5 rounded-md font-bold text-sm hover:bg-white/10 transition">
              <User size={18} />
              <span>Sign in / Sign up</span>
            </Link>
          </div>

          <div className="flex items-center gap-3 xl:hidden">
            <div className="relative p-2">
              <ShoppingCart size={24} />
              <span className="absolute top-0 right-0 bg-[#facc15] text-black text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-[#e21b1b]">0</span>
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-1">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white border-b shadow-sm hidden md:block relative">
        <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-between py-1">
          <div className="flex items-center gap-8 h-full">
            
            <div 
              className="relative"
              onMouseEnter={() => setIsCategoryOpen(true)}
              onMouseLeave={() => setIsCategoryOpen(false)}
            >
              <button className="flex items-center gap-2 font-black text-gray-800 uppercase text-sm border-r pr-6 border-gray-200 py-3 hover:text-[#e21b1b] transition-all">
                <Menu size={18} />
                Shop By Category
                <ChevronDown size={14} className={`ml-1 transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
              </button>

              {isCategoryOpen && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-2xl border border-gray-100 py-3 animate-in fade-in slide-in-from-top-2 duration-200">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        onCategoryChange(cat.id); 
                        setIsCategoryOpen(false);
                      }}
                      className={`w-full text-left px-6 py-2.5 text-sm font-bold transition-all flex items-center justify-between
                        ${currentCategory === cat.id 
                          ? 'bg-red-50 text-[#e21b1b] border-l-4 border-[#e21b1b]' 
                          : 'text-gray-600 hover:bg-gray-50 hover:text-[#e21b1b]'}`}
                    >
                      {cat.label}
                      {currentCategory === cat.id && <Filter size={14} />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <nav className="flex items-center gap-6 overflow-x-auto no-scrollbar">
              {["Ramadan Special", "Great Deals", "Flash Sale", "Offers"].map((item) => (
                <Link key={item} href="#" className="whitespace-nowrap text-xs font-black text-gray-700 uppercase hover:text-[#e21b1b] transition-colors tracking-tight">
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-6 text-gray-500 text-xs font-bold">
            <Link href="#" className="flex items-center gap-1.5 hover:text-[#e21b1b]">
              <MapPin size={14} /> Our outlets
            </Link>
            <Link href="#" className="flex items-center gap-1.5 hover:text-[#e21b1b]">
              <Phone size={14} /> Help line: 16469
            </Link>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </header>
  );
}