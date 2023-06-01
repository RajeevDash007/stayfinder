'use client';
import React from 'react'
import Image from "next/image"

function Avatar() {
  return (
    <div>
      <Image 
        className="rounded-full"
        height="30"
        width="30"
        alt="Avatar"
        src="/images/placeholder.png"
      />
    </div>
  )
}

export default Avatar
