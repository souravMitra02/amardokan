"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, ArrowRight, Zap, ShieldCheck, Truck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#fafafa] overflow-hidden">
      {/* 1. Background Design: Red accent line */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#e21b1b]/5 -skew-x-12 translate-x-20 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* 2. Text Content Section */}
          <div className="space-y-8 z-10 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-red-50 text-[#e21b1b] px-4 py-2 rounded-full shadow-sm animate-bounce">
              <Zap size={16} fill="currentColor" />
              <span className="text-xs font-black uppercase tracking-wider">Ramadan Big Sale - Up to 70% Off</span>
            </div>

            <h1 className="text-4xl md:text-7xl font-black text-gray-900 leading-[1.1]">
              Upgrade Your <br />
              <span className="text-[#e21b1b] italic">Lifestyle</span> Today.
            </h1>

            <p className="text-gray-500 text-lg md:text-xl font-medium max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Explore our curated collection of premium gadgets, fashion, and home essentials. Quality guaranteed.
            </p>

            <Link href="#products" className="group bg-gray-900 text-white px-8 py-4 rounded-2xl font-black text-lg flex items-center gap-3 hover:bg-black transition-all shadow-2xl active:scale-95 w-fit mx-auto lg:mx-0">
              <ShoppingBag size={20} />
              SHOP NOW
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>

            <div className="pt-8 flex flex-wrap justify-center lg:justify-start gap-6 border-t border-gray-200">
              <div className="flex items-center gap-2 text-gray-400">
                <ShieldCheck size={18} className="text-green-500" />
                <span className="text-xs font-bold uppercase tracking-widest">Original Products</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Truck size={18} className="text-blue-500" />
                <span className="text-xs font-bold uppercase tracking-widest">Fast Delivery</span>
              </div>
            </div>
          </div>
          <div className="relative order-1 lg:order-2 h-[450px] md:h-[600px] w-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-80 md:w-64 md:h-[450px] z-20 drop-shadow-2xl">
              <Image src="/phone.png" alt="Phone" fill priority className="object-contain" />
            </div>
            <div className="absolute top-0 left-10 w-32 h-32 md:w-full md:h-3/5 z-10 animate-pulse">
              <Image src="/shirt.png" alt="Shirt" fill className="object-contain" />
            </div>
            <div className="absolute bottom-5 right-0 w-32 h-32 md:w-44 md:h-44 z-30 animate-bounce">
              <Image src="/camera.png" alt="Camera" fill className="object-contain drop-shadow-lg" />
            </div>
            <div className="absolute top-2/4 left-5 w-24 h-24 md:w-full md:h-36 z-20 animate-bounce [animation-duration:3s]">
              <Image src="/Bag.png" alt="Bag" fill className="object-contain" />
            </div>

            <div className="absolute bottom-0 left-10 w-24 h-24 md:w-full md:h-32 z-10 animate-pulse">
              <Image src="/Necklaces.png" alt="Necklace" fill className="object-contain" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#facc15] rounded-full blur-[100px] opacity-20 -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}