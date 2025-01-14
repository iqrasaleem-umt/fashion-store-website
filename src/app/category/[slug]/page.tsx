import { products } from "@/app/utils/mock";
import ProductCard from "@/components/productcard";

const getproductsByCategory = (category: string) => {
  return products.filter((product) => product.category.toLowerCase() === category.toLowerCase());
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // Destructure 'slug' from 'params'
  const result = getproductsByCategory(slug); // Use the resolved 'slug'

  console.log("Slug:", slug); // Debugging: Check the slug
  console.log("Result:", result); // Debugging: Check the filtered products

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
            />
          ))
        ) : (
          <p className="col-span-4 text-center">No products found for this category.</p>
        )}
      </div>
    </div>
  );
}
