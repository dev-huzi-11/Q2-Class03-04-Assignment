"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const About = () => {

  const router = useRouter()
  return (
    <div className='min-h-[78vh] w-full  flex justify-center items-center flex-col'>
      <h2 className='text-3xl'>I am About Page.</h2>
      <button type='button' className='
      bg-black text-white px-4 py-2 rounded-md font-medium mt-3'
      onClick={() => router.push("/")}
      >Go to Home Page</button>
    </div>
  )
}

export default About
