import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Shirt } from "lucide-react";

const Features = () => {
  const serviceFeatures = [
    {
      icon: <Truck size={36} strokeWidth={1.5} />,
      title: "Free Delivery",
      description: "Enjoy free shipping on all orders over 1000 BDT.",
    },
    {
      icon: <RotateCcw size={36} strokeWidth={1.5} />,
      title: "Easy Returns",
      description: "Simple and hassle-free 7-day return policy.",
    },
    {
      icon: <ShieldCheck size={36} strokeWidth={1.5} />,
      title: "Secure Payment",
      description: "100% secure payment via bKash, Cards or COD.",
    },
    {
      icon: <Shirt size={36} strokeWidth={1.5} />,
      title: "Latest Styles",
      description: "Discover thousands of trending fashion styles.",
    },
  ];

  return (
    <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Why Shop <span className='text-[#e21b1b]'>With Us?</span></h2>
            <div className="w-50 h-1 bg-black mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-100 rounded-3xl overflow-hidden shadow-xl shadow-gray-100/50">
          
          {serviceFeatures.map((feature, idx) => (
            <div 
              key={idx}
              className={`
                relative group p-10 flex flex-col items-center text-center transition-all duration-500
                ${idx !== serviceFeatures.length - 1 ? 'lg:border-r border-gray-100' : ''}
                ${idx < 2 ? 'border-b lg:border-b-0' : 'md:border-b-0'}
                border-gray-100 hover:bg-gradient-to-b hover:from-white hover:to-gray-50
              `}
            >
              <div className="mb-6 relative">
                <div className="absolute -inset-2 bg-[#facc15] opacity-0 group-hover:opacity-20 rounded-full blur-xl transition-opacity duration-500" />
                <div className="relative text-gray-800 group-hover:text-[#e21b1b] transition-colors duration-500 transform group-hover:scale-110">
                  {feature.icon}
                </div>
              </div>

              <div className="space-y-3 relative z-10">
                <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wider group-hover:text-[#e21b1b] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#facc15] transition-all duration-500 group-hover:w-full" />
              <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-[#e21b1b] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Features;