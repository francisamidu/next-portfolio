import React from "react";
import Link from "next/link";

const TrendingItem = ({ link, title }) => {
  return (
    <div className="hidden md:flex flex-row justify-between items-center py-1.5 px-2 absolute w-max text-sm rounded-full bg-blue-100 trending-item rounded-lg">
      <p className="ml-4">{title}</p>
      <Link href={link}>
        <a className="ml-8 w-max px-4 py-2 rounded-full rounded-lg text-white bg-blue-600">
          Learn More
        </a>
      </Link>
    </div>
  );
};

export default TrendingItem;
