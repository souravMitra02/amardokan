import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div className="border p-4 rounded-xl shadow-sm hover:shadow-lg transition-all bg-white flex flex-col h-full">
            <div className="h-48 w-full mb-4 overflow-hidden rounded-md">
                <Image
                    width={50}
                    height={50}
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain hover:scale-105 transition-transform"
                />
            </div>

            <div className="flex-grow">
                <h2 className="font-semibold text-gray-800 line-clamp-2 mb-2">{product.title}</h2>
                <p className="text-blue-600 font-bold text-lg">${product.price}</p>
                <p className="text-xs text-gray-400 uppercase mt-1">{product.category}</p>
            </div>

            <Link
                href={`/products/${product.id}`}
                className="mt-4 block text-center bg-gray-900 text-white py-2 rounded-lg text-sm hover:bg-gray-700 transition"
            >
                View Details
            </Link>
        </div>
    );
}