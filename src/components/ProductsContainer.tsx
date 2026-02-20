"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import SkeletonCard from "@/components/SkeletonCard";
import { Shirt } from "lucide-react";
import { Product } from "@/types/product";
import { Dispatch, SetStateAction } from "react";
interface ProductsContainerProps {
    category: string;
    setCategory: Dispatch<SetStateAction<string>>;
} 

export default function ProductsContainer({ category }: ProductsContainerProps) {
 const [products, setProducts] = useState<Product[]>([]);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [loading, setLoading] = useState(true);   
    
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((p) => {
    const categoryMatch = category === "all" || p.category === category;
    const priceMatch = p.price <= maxPrice;
    return categoryMatch && priceMatch;
  });

  return (
    <main className="max-w-7xl mx-auto p-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div>
          <h2 className="text-xl font-black text-gray-900 uppercase">
            Category: <span className="text-[#e21b1b]">{category}</span>
          </h2>
        </div>

        <div className="flex items-center gap-4 w-full md:w-64 bg-gray-50 p-2 px-4 rounded-xl border border-gray-100">
          <div className="flex flex-col w-full">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] font-black text-gray-400 uppercase">Max Price</span>
              <span className="text-xs font-bold text-[#e21b1b] bg-red-50 px-2 py-0.5 rounded-md">${maxPrice}</span>
            </div>
            <input
              type="range" min="0" max="1000" value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#facc15]"
            />
          </div>
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[...Array(8)].map((_, i) => <SkeletonCard key={i} />)}
        </div>
      ) : filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
           <Shirt size={48} className="mx-auto text-gray-300 mb-4" />
           <h3 className="text-xl font-bold">No products found!</h3>
        </div>
      )}
    </main>
  );
}