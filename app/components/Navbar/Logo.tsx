'use client';
import React from 'react'
import Image from 'next/image';
import {useRouter} from "next/navigation";  

const Logo = () => {
  const router = useRouter();
  return(
    <Image
        alt='logo'
        className='hidden md:block cursor-pointer scale-150'
        height="100"
        width="100"
        src="/images/Logo.png"
     />
  )
}

export default Logo
