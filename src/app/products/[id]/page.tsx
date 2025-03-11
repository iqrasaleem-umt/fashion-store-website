"use client";
import { products } from "@/app/utils/mock";
import ProductCard from "@/components/productcard";
import { useParams } from "next/navigation";

const getProductDetail = (id: number) => {
  return products.find((product) => product.id === id);
};

export default function ProductPage() {
  const params = useParams();
  const { id } = params;

  if (!id) return <div className="text-center mt-10 text-lg">Loading...</div>;

  const product = getProductDetail(Number(id));

  if (!product) {
    return <div className="text-center text-xl text-red-500 mt-10">Product not found</div>;
  }

  return (
    <div className="px-6 mt-10">
      <h1 className="text-4xl font-semibold px-16">{product.title}</h1>
      <div className="grid grid-cols-4 gap-3 mt-5">
        {/* ✅ ProductCard ka use wapas kar diya */}
        <ProductCard
          key={product.id}
          title={product.title}
          category={product.category}
          price={product.price}
          image={product.image}
          id={product.id}
        />
      </div>
    </div>
  );
}
