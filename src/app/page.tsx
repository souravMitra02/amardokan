"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import ProductCard from "@/components/ProductCard";
import SkeletonCard from "@/components/SkeletonCard";

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]); 
  const [category, setCategory] = useState("all"); 
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
  
  if (loading) return <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  return (
   <main className="min-h-screen bg-gray-50 p-6">
  <div className="max-w-7xl mx-auto">
    <h1 className="text-4xl font-black text-center mb-10 text-gray-800">AmarDokan</h1>
    <div className="mb-10 flex flex-col md:flex-row items-center justify-center gap-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">

      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Category</label>
        <select 
          className="p-3 border rounded-xl shadow-sm bg-white outline-none focus:ring-2 focus:ring-blue-500 min-w-[200px]"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Products</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
      </div>
      <div className="flex flex-col gap-2 w-full max-w-[300px]">
        <div className="flex justify-between items-center">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Max Price</label>
          <span className="text-sm font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full">${maxPrice}</span>
        </div>
        <input 
          type="range" 
          min="0" 
          max="1000" 
          step="10"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
        />
        <div className="flex justify-between text-[10px] text-gray-400 font-bold">
          <span>$0</span>
          <span>$1000</span>
        </div>
      </div>
    </div>
    {filteredProducts.length > 0 ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    ) : (
      <div className="text-center py-20 text-gray-500 font-medium text-lg">
        এই দামে বা ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি!
      </div>
    )}
  </div>
</main>
  );
}