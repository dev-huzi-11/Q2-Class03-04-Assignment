import React from 'react'

interface CardType {
    name: string;
    rollNo: number;
    day: string;
    onSite: string
}

const Cards = (cards: CardType) => {
  return (
    <div className='h-50 w-1/3 bg-[#9CC3D5FF] rounded-md  text-black px-4 py-4 text-xl'>
      <h1 className='py-1'>Name: {cards.name}</h1>
      <h2>Roll No: {cards.rollNo}</h2>
      <p className='py-1'>Day: {cards.day}</p>
      <p>On Site: {cards.onSite}</p>
    </div>
  )
}

export default Cards
