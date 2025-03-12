"use client";
import { useState } from "react";
import { products } from "@/app/utils/mock";
import Hero from "@/app/views/hero";
import ProductCard from "@/components/productcard";
import { useParams } from "next/navigation";

const getProductDetail = (id: number) => {
  return products.find((product) => product.id === id);
};

export default function ProductPage() {
  const params = useParams();
  const { id } = params;

  // ✅ Hooks ko hamesha top-level pe call karo
  const [quantity, setQuantity] = useState(1);

  if (!id) return <div className="text-center mt-10 text-lg">Loading...</div>;

  const product = getProductDetail(Number(id));

  if (!product) {
    return <div className="text-center text-xl text-red-500 mt-10">Product not found</div>;
  }

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    console.log(`Added to cart: ${product.title}, Quantity: ${quantity}`);
  };

  const handleBuyNow = () => {
    console.log(`Buying now: ${product.title}, Quantity: ${quantity}`);
  };

  return (
    <div className="px-6 mt-10">
      <Hero />
      <div className="flex">
        <div className="grid grid-cols-4 gap-3 mt-5">
          <ProductCard
            key={product.id}
            title={product.title}
            category={product.category}
            price={product.price}
            image={product.image}
            id={product.id}
          />
        </div>
        <div className="ml-16 mt-10">
          <h1 className="text-2xl font-semibold">{product.title}</h1>
          
          {/* ✅ Quantity Selector */}
          <div className="flex items-center mt-4">
            <button onClick={decreaseQuantity} className="px-3 py-1 bg-gray-300">-</button>
            <span className="px-4">{quantity}</span>
            <button onClick={increaseQuantity} className="px-3 py-1 bg-gray-300">+</button>
          </div>

          {/* ✅ Add to Cart & Buy Now Buttons */}
          <div className="mt-4">
            <button 
              onClick={handleAddToCart} 
              className="px-6 py-2 bg-blue-500 text-white rounded-md mr-2"
            >
              Add to Cart
            </button>
            <button 
              onClick={handleBuyNow} 
              className="px-6 py-2 bg-green-500 text-white rounded-md"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
 