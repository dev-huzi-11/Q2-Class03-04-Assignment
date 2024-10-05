"use client"
import { useRouter } from 'next/navigation'

const Contact = () => {

  const router = useRouter()

  return (
    <div className='min-h-[78vh] flex items-center justify-center flex-col'>
      <h2 className='text-2xl'>I am Contact Page</h2>
      <button type='button' className='
      bg-black text-white px-4 py-2 rounded-md font-medium mt-3'
      onClick={() => router.push("/")}
      >Go to Home Page</button>
    </div>
  )
}

export default Contact
