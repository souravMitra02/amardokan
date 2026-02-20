"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import ProductsContainer from "@/components/ProductsContainer";
import Features from "@/components/Features";

export default function Home() {
  const [category, setCategory] = useState("all");

  return (
    <>
      <Navbar onCategoryChange={setCategory} currentCategory={category} />
      <ProductsContainer category={category} setCategory={setCategory} />
      <Features></Features>
    </>
  );
}