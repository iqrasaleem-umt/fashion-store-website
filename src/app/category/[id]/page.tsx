"use client";
import { products } from "@/app/utils/mock";
import { useParams } from "next/navigation";
import ProductCard from "@/components/productcard";

const getProductByCategory = (category?: string) => {
  if (!category) return []; // ✅ Handle undefined category
  return products.filter((product) => product.category.toLowerCase() === category.toLowerCase());
};

export default function Page() {
  const params = useParams();
  let { id } = params; // ✅ Get `id` from URL params

  // ✅ Ensure `id` is always a string (handle string[])
  if (Array.isArray(id)) {
    id = id[0]; // Use the first value if it's an array
  }

  if (!id) return <div className="text-center mt-10 text-lg">Loading...</div>;

  const result = getProductByCategory(id);

  return (
    <div className="px-6 mt-10">
      <h1 className="text-4xl font-semibold px-16">Collection</h1>
      <div className="grid grid-cols-4 gap-3 mt-5">
        {result.length > 0 ? (
          result.map((item) => (
            <ProductCard
              key={item.id}
              title={item.title}
              category={item.category}
              price={item.price}
              image={item.image}
              id={item.id}
            />
          ))
        ) : (
          <p className="col-span-4 text-center text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
}
