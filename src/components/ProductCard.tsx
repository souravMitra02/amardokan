"use client";

import { ShoppingBag, Star, Eye } from "lucide-react"; // Eye icon add kora hoyeche
import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link"; // Link import koro

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group h-full">
      {/* Image Section */}
      <div className="relative w-full h-56 p-6 overflow-hidden bg-gray-50/50 rounded-t-xl">
        <Image
          fill // height/width er bodole fill use kora best relative container e
          src={product.image}
          alt={product.title}
          className="p-6 object-contain transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-md font-bold text-gray-800 line-clamp-2 min-h-[48px] hover:text-[#e21b1b] transition-colors">
          <Link href={`/products/${product.id}`}>{product.title}</Link>
        </h3>
        
        <div className="mt-4 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-xl font-black text-[#e21b1b]">${product.price.toFixed(2)}</span>
            <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-md text-yellow-700 text-xs font-bold">
              <Star size={12} fill="currentColor" />
              {product.rating?.rate}
            </div>
          </div>

          <div className="flex items-center justify-between mt-2 pt-3 border-t border-gray-50 gap-2">
             {/* Details Button - Outline Style */}
             <Link 
               href={`/products/${product.id}`}
               className="flex items-center justify-center gap-1.5 border-2 border-gray-200 text-gray-600 hover:border-[#e21b1b] hover:text-[#e21b1b] text-[11px] font-bold px-3 py-2 rounded-lg transition-all flex-1 text-center"
             >
                <Eye size={14} />
                DETAILS
             </Link>

             {/* Buy Now Button - Solid Style */}
             <button className="flex items-center justify-center gap-1.5 bg-[#facc15] hover:bg-[#eab308] text-gray-900 text-[11px] font-black px-3 py-2 rounded-lg transition-all active:scale-95 shadow-sm flex-1">
                <ShoppingBag size={14} />
                BUY NOW
             </button>
          </div>
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider text-center mt-1">
            {product.rating?.count} Reviews
          </span>
        </div>
      </div>
    </div>
  );
}