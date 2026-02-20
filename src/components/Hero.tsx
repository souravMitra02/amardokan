"use client";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, ArrowRight, Zap, ShieldCheck, Truck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#fafafa] overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#e21b1b]/5 -skew-x-12 translate-x-20 hidden lg:block"></div>
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
              Explore our curated collection of premium gadgets, fashion, and home essentials. Quality guaranteed, delivered to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link href="#products" className="group bg-[#facc15] text-white px-8 py-4 rounded-2xl font-black text-lg flex items-center gap-3 hover:bg-black transition-all shadow-2xl active:scale-95 w-full sm:w-auto justify-center">
                <ShoppingBag size={20} />
                SHOP NOW
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              
              <Link href="#" className="bg-white text-gray-900 border-2 border-gray-100 px-8 py-4 rounded-2xl font-black text-lg hover:bg-gray-50 transition-all w-full sm:w-auto text-center shadow-sm">
                VIEW OFFERS
              </Link>
            </div>
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
          
          <div className="relative order-1 lg:order-2">
            <div className="relative w-full h-[350px] md:h-[500px] lg:h-[550px] z-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)] animate-in fade-in zoom-in duration-1000">
              <Image
                src="/phone.png"
                alt="Banner Image"
                fill 
                priority
                className="object-contain"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[450px] md:h-[450px] bg-[#facc15] rounded-full blur-[80px] md:blur-[100px] opacity-20 -z-10"></div>
            <div className="absolute bottom-5 right-5 md:bottom-10 md:right-10 bg-white p-4 rounded-2xl shadow-2xl z-20 hidden sm:block animate-pulse border border-gray-50">
                <p className="text-[10px] font-black text-[#e21b1b] uppercase">Trusted by</p>
                <p className="text-lg font-black text-gray-900"><span className="text-[#e21b1b]">50K+</span> Happy Users</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}