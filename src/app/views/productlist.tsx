import React from 'react';
import ProductCard from '@/components/productcard';
import { products } from '../utils/mock';
export default function ProductList() {
  const productchunks= products.slice(0,13)
  return (
    <div className="px-6 mt-10">
      <h1 className="text-4xl font-semibold px-16">Collection</h1>
      <div className="grid grid-cols-4 gap-3 mt-5">
        {productchunks.map((item)=>(
          <ProductCard key={item.id} title={item.title}category={item.category} price={item.price}  image={item.image} />
          
        ))}
        
      </div>
    </div>
  );
}

