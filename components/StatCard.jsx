import React from "react";
import { BiStats } from "react-icons/bi";

const StatCard = ({ number, percentile, text }) => {
  return (
    <div className="bg-white py-2 px-4 rounded mr-2 stat-card grid grid-cols-3 items-center flex-1 min-w-max mb-2">
      <h1 className="number font-bold text-2xl">{number}</h1>
      <p className="text text-gray-500 text-2xl">{text}</p>
      <BiStats className="text-green-500 stat-icon text-3xl" />
    </div>
  );
};

export default StatCard;
