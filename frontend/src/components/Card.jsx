// src/components/Card.js
import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg bg-[#f4f6f8] m-4">
      <h2 className="text-md font-semibold tracking-tighter ">{title}</h2>
      <hr className="border-slate-200"/>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default Card;
