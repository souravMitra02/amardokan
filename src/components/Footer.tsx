import React from 'react';
import { MapPinHouse, Navigation, Facebook, Youtube, Linkedin, Mail, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-[#f8f9fa] text-gray-800 border-t border-gray-200 mt-auto">
            <div className="max-w-7xl mx-auto px-6 lg:px-16 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                <div className="flex flex-col space-y-4">
                     <Link href="/" className="flex">
            <div className="bg-white p-1 w rounded-sm">
              <span className="text-2xl font-black text-[#e21b1b] px-1 italic">
                Amar<span className="text-black">Dokan</span>
              </span>
            </div>
          </Link>
                    <p className="text-sm leading-relaxed text-gray-500 font-medium max-w-xs">
  Discover premium fashion and cutting-edge electronics all in one place. 
  We bring you top-quality lifestyle products with a commitment to excellence and fast delivery.
</p>
                    <div className="flex space-x-3">
                        <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-[#DF0000] hover:text-white transition-all duration-300 shadow-sm">
                            <Facebook size={18} />
                        </Link>
                        <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-[#DF0000] hover:text-white transition-all duration-300 shadow-sm">
                            <Youtube size={18} />
                        </Link>
                        <Link href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-[#DF0000] hover:text-white transition-all duration-300 shadow-sm">
                            <Linkedin size={18} />
                        </Link>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-6 border-b-2 border-[#FFD814] w-fit">Quick Links</h3>
                    <ul className="space-y-3 text-sm font-medium">
                        <li><Link href="/shop" className="hover:text-[#DF0000] transition-colors">All Products</Link></li>
                        <li><Link href="/offers" className="hover:text-[#DF0000] transition-colors">Special Offers</Link></li>
                        <li><Link href="/track-order" className="hover:text-[#DF0000] transition-colors">Track Order</Link></li>
                        <li><Link href="/about" className="hover:text-[#DF0000] transition-colors">About Us</Link></li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div>
                    <h3 className="text-lg font-bold mb-6 border-b-2 border-[#FFD814] w-fit">Contact Us</h3>
                    <ul className="space-y-4 text-sm font-medium text-gray-600">
                        <li className="flex items-center gap-3">
                            <PhoneCall size={16} className="text-[#DF0000]" />
                            <span>+8801891883223</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={16} className="text-[#DF0000]" />
                            <span>support@amardokan.com</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <MapPinHouse size={18} className="text-[#DF0000] flex-shrink-0" />
                            <span>Barishal, Bangladesh</span>
                        </li>
                    </ul>
                </div>

                {/* Newsletter Section */}
                <div>
                    <h3 className="text-lg font-bold mb-6 border-b-2 border-[#FFD814] w-fit">Newsletter</h3>
                    <p className="text-sm mb-4 text-gray-600">Subscribe to get the latest discounts and updates.</p>
                    <div className="flex overflow-hidden rounded-md border border-gray-300 focus-within:border-[#DF0000] transition-all">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="p-3 flex-grow focus:outline-none bg-white text-sm"
                        />
                        <button className="bg-[#DF0000] px-4 text-white hover:bg-black transition-colors flex items-center justify-center">
                            <Navigation size={18} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-white border-t border-gray-100 py-8">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <p className="text-sm text-gray-500 font-bold uppercase tracking-tight">
                        © {new Date().getFullYear()} AmarDokan. All rights reserved.
                    </p>
                        <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest font-medium">
                            Premium Quality Grocery Service
                        </p>
                    </div>
                    {/* Payment Icons */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {['BKash', 'Nagad', "Stripe", "Visa", 'Mastercard'].map((img) => (
                            <div key={img} className="bg-white border border-gray-100 rounded px-2 py-1 shadow-sm flex items-center justify-center gap-2 group hover:border-[#DF0000] transition-all duration-300">
                                <span className="text-[9px] font-bold uppercase ">{img}</span> 
                                <Image 
                                    src={`/${img}.png`} 
                                    alt={img} 
                                    width={45} 
                                    height={25} 
                                    className="object-contain" 
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;