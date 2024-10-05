import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-[#0063B2FF] flex justify-between px-10 py-4 text-white'>
      <h1 className='text-xl font-bold'>Huzaifa</h1>
      <ul className='flex gap-8'>
        <li><Link href={"/"}>Home</Link></li>
        <li><Link href={"/about"}>About</Link></li>
        <li><Link href={"/card"}>Cards</Link></li>
        <li><Link href={"/contact"}>Contact</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
