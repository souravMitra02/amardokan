"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Product } from "@/types/product";
import Image from "next/image";
import SkeletonCard from "@/components/SkeletonCard";


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
<div className="max-w-7xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <SkeletonCard />
    </div>
    );
  }

  if (!product) {
    return <div className="text-center py-20">পণ্যটি পাওয়া যায়নি!</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-12">
      <button 
        onClick={() => router.back()}
        className="mb-8 flex items-center gap-2 text-gray-600 hover:text-black transition font-medium"
      >
        ← ফিরে যান (Back)
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
        <div className="flex justify-center bg-gray-50 p-6 rounded-2xl">
                  <Image
                      width={250}
                      height={50}
            src={product.image} 
            alt={product.title} 
            className="max-h-[450px] object-contain hover:scale-105 transition-transform" 
          />
        </div>
        <div className="flex flex-col justify-center space-y-6">
          <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">
            {product.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
            {product.title}
          </h1>
          
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-gray-900">${product.price}</span>
            <div className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-lg text-sm font-bold">
              ⭐ {product.rating?.rate} ({product.rating?.count} reviews)
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed text-lg">
            {product.description}
          </p>

          <button className="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold text-lg hover:bg-black transition shadow-xl active:scale-95">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}