import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Hero() {
  return (
    <div>
        <div className='flex items-center justify-center mt-3'>
        <Image src={"/pic1.jpeg"} height={150} width={150} alt='image'/>
    </div>
<div className="flex justify-evenly text-gray-600 font-mono">
  <Link href="/" className="hover:underline hover:text-pink-900">Home</Link>
  <Link href="/products" className="hover:underline hover:text-pink-900">All</Link>
  
  <Link href="/category/female" className="hover:underline hover:text-pink-900">Female</Link>
  <Link href="/category/male" className="hover:underline hover:text-pink-900">Male</Link>
  <Link href="/contact" className="hover:underline hover:text-pink-900">Contact</Link>
</div>

<div className='border mt-3'></div>


</div>

    
  )
}
