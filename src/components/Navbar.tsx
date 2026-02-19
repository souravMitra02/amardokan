import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black text-blue-600 tracking-tighter">
          AmarDokan
        </Link>
        <div className="flex gap-6 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <span className="cursor-not-allowed opacity-50">Cart (0)</span>
        </div>
      </div>
    </nav>
  );
}