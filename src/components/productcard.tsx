import React from 'react';
import Image from 'next/image';

export default function ProductCard() {
  const products = Array(16).fill({
    image: '/pic2.jpeg',
    title: 'Linen 2 pc Embroidered',
    price: 'PKR: RS 3800',
  });

  return (
    <div>
      <div className='px-6'>
        <h1 className='text-4xl font-semibold mt-10 px-16'>Collection</h1>
        <div className='grid grid-cols-4 gap-3 mt-10'>
          {products.map((product, index) => (
            <div className='p-4' key={index}>
              <Image
                src={product.image}
                width={300}
                height={200}
                alt='image'
                className='transition-transform duration-200 ease-in-out transform hover:scale-110'
              />
              <p className='text-sm font-mono'>{product.title}</p>
              <p className='text-sm font-mono'>{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

