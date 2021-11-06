import React from "react";
import Link from "next/link";

import { useNewsContext } from "../contexts/NewsContext";

const TrendingItem = () => {
  const { trendingNews } = useNewsContext();
  return (
    <div className="hidden md:flex flex-row justify-between items-center py-1.5 px-2 absolute w-1/2 text-sm rounded-full bg-blue-100 trending-item rounded-lg">
      <p className="ml-4">{trendingNews?.title}</p>
      <Link href={trendingNews?.link}>
        <a className="w-max px-4 py-2 rounded-full rounded-lg text-white bg-blue-600">
          Learn More
        </a>
      </Link>
    </div>
  );
};

export default TrendingItem;
