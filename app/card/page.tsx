"use client";
import React from "react";
import { useState, useEffect } from "react";

interface Card {
  id: number;
  title: string;
  userId: number;
  body: string;
}

const Card = () => {
  const [cards, setCards] = useState<Card[]>([]);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data: Card[] = await response.json();
    setCards(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className="container flex flex-wrap gap-4 justify-center my-4">
        {cards.map((card) => {
          return (
            <div
              key={card.id}
              className="cards w-1/5 p-4 bg-slate-100 text-black shadow-lg"
            > 
              <h1 className="text-xl font-bold">{card.title}</h1>
              <h5 className="text-sm text-gray-600">UserId: {card.userId}</h5>
              <p className="mt-2">{card.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
