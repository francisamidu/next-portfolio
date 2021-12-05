import React from "react";

import Image from "next/image";

const Coin = ({ coin }) => {
  const { rank, name, price, marketCap } = coin;
  return (
    <div className="coin-card mb-4 mr-2 ml-2 flex-1 min-w-max bg-white rounded shadow py-4 px-4 flex flex-col justify-center items-center">
      <div className="border-2 border-white rounded-full">
        <Image src="/bitcoin-logo.png" width="100" height="100" />
      </div>
      <h1 className="bg-blue-100 text-blue-400 mt-2 p-2 rounded-md text-sm">
        <span className="mr-2">{rank}</span>
        <span className="uppercase font-bold">{name}</span>
      </h1>
      <p className="text-center text-gray-700 mt-2">
        Price: <span className="text-black font-bold ">{price}</span>
      </p>
      <p className="text-center text-gray-700 mt-2">
        Market Cap: <span className="text-black font-bold">{marketCap}</span>
      </p>
    </div>
  );
};

export default Coin;
