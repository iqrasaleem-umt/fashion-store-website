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
  <Link href="" className="hover:underline hover:text-pink-900">Shalwar kameez (female)</Link>
  <Link href="" className="hover:underline hover:text-pink-900">Shalwar kameez duppata (female)</Link>
  <Link href="" className="hover:underline hover:text-pink-900">Shalwar kameez (male)</Link>
  <Link href="" className="hover:underline hover:text-pink-900">Contact</Link>
</div>

<div className='border mt-3'></div>


</div>

    
  )
}
