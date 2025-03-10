import React from 'react'
import { products } from '../utils/mock'
import ProductCard from '@/components/productcard'
function All() {
   
  return (
    <div>
         <div className="px-6 mt-10">
              <h1 className="text-4xl font-semibold px-16">Collection</h1>
              <div className="grid grid-cols-4 gap-3 mt-5">
                {products.map((item)=>(
                  <ProductCard key={item.id} title={item.title} category={item.category} price={item.price}  image={item.image}  id={item.id} />
                  
                ))}
                
              </div>
            </div>
    </div>
  )
}

export default All