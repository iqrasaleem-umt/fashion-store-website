import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function productCard(props: { title: string; price: string; image: string;category: string; id: number }) {
  return (
    <Link href={`/products/${props.id}`}>
    <div className="p-4">
      <div className="relative w-[300px] h-[400px] overflow-hidden">
        <Image
          src={props.image}
          layout="fill"
          objectFit="cover"
          alt="image"
          className="transition-transform duration-200 ease-in-out transform hover:scale-110"
        />
      </div>
      <p className="text-sm font-mono">{props.title}</p>
      <p className="text-sm font-mono">{props.category}</p>
      <p className="text-sm font-mono">{props.price}</p>
     
     
    </div>
    </Link>
  );
}


