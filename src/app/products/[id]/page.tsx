"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Product } from "@/types/product";
import Image from "next/image";
import SkeletonCard from "@/components/SkeletonCard";
import { ArrowLeft, Star, ShoppingCart, CreditCard, MessageCircle } from "lucide-react";

export default function ProductDetails() {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-6 md:p-12 animate-pulse">
        <div className="h-10 w-24 bg-gray-200 rounded mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="h-[450px] bg-gray-200 rounded-3xl"></div>
          <div className="space-y-6">
            <div className="h-6 w-1/4 bg-gray-200 rounded"></div>
            <div className="h-12 w-full bg-gray-200 rounded"></div>
            <div className="h-24 w-full bg-gray-200 rounded"></div>
            <div className="h-12 w-full bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return <div className="text-center py-20 font-bold text-xl">Product not found !!</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-12 bg-[#fafafa] min-h-screen">
      <button 
        onClick={() => router.back()}
        className="mb-8 flex items-center gap-2 text-gray-500 hover:text-[#e21b1b] transition-all font-bold group bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 w-fit"
      >
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        BACK TO SHOP
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 bg-white p-5 md:p-10 rounded-[40px] shadow-sm border border-gray-50">
        <div className="relative group bg-[#fdfdfd] rounded-[32px] p-8 flex items-center justify-center border border-gray-50 overflow-hidden">
          <div className="relative w-full h-[300px] md:h-[500px]">
            <Image
              fill
              src={product.image} 
              alt={product.title} 
              priority
              className="object-contain transition-transform duration-700 group-hover:scale-110" 
            />
          </div>
          <div className="absolute top-6 left-6 bg-[#e21b1b] text-white px-4 py-1.5 rounded-full text-xs font-black italic">
            FLASH DEAL
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="space-y-2 mb-6">
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest">
              {product.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-[1.1]">
              {product.title}
            </h1>
          </div>
          
          <div className="flex items-center gap-6 mb-8">
            <div className="flex flex-col">
               <span className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">Current Price</span>
               <span className="text-4xl font-black text-[#e21b1b]">${product.price}</span>
            </div>
            <div className="h-10 w-[1px] bg-gray-200"></div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">Customer Rating</span>
              <div className="flex items-center gap-2 mt-1">
                 <div className="flex items-center gap-1 bg-[#facc15] text-gray-900 px-2.5 py-1 rounded-lg text-sm font-black">
                   <Star size={14} fill="currentColor" />
                   {product.rating?.rate}
                 </div>
                 <span className="text-sm text-gray-500 font-bold">({product.rating?.count} reviews)</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-10">
            <h3 className="text-sm font-black text-gray-800 uppercase">Product Description</h3>
            <p className="text-gray-500 leading-relaxed text-md font-medium">
              {product.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-gray-900 text-white py-4 rounded-2xl font-black text-md hover:bg-black transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3">
              <ShoppingCart size={20} />
              ADD TO CART
            </button>
            <button className="flex-1 bg-[#facc15] text-gray-900 py-4 rounded-2xl font-black text-md hover:bg-[#eab308] transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3 border-b-4 border-yellow-600">
              <CreditCard size={20} />
              BUY IT NOW
            </button>
          </div>

          {/* Extra Info */}
          <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-2 gap-4">
             <div className="flex items-center gap-3 text-gray-600">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                   <MessageCircle size={20} />
                </div>
                <div>
                   <p className="text-[10px] font-black uppercase text-gray-400">Need Help?</p>
                   <p className="text-xs font-bold">Chat with us</p>
                </div>
             </div>
             <div className="text-right flex flex-col justify-center">
                <p className="text-[10px] font-black uppercase text-gray-400">Delivery</p>
                <p className="text-xs font-bold text-green-600">Free Shipping Worldwide</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}