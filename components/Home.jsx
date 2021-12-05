import React, { memo } from "react";

import Coin from "./Coin";
import StatCard from "./StatCard";

const Home = ({ stats, coins, setPage }) => {
  const handleClick = () => setPage("currencies");
  return (
    <div>
      <div>
        <h1 className="text-3xl custom-blue font-bold mb-4">
          Global Crypto Stats
        </h1>
        {stats?.length > 0 ? (
          <div className="flex flex-row flex-wrap justify-between items-center">
            {stats?.map((stat) => (
              <StatCard
                number={stat.total}
                percentile={stat.percentile}
                text={stat.text}
                key={stat.id}
              />
            ))}
          </div>
        ) : (
          <h1 className="text-center text-2xl custom-blue">
            Data not available
          </h1>
        )}
      </div>
      <div>
        <div className="flex flex-row justify-between items-center my-4">
          <h1 className="text-3xl custom-blue font-bold mb-4">
            Top 10 Cryptocurrencies in the world
          </h1>
          <span
            className="text-blue-500 font-bold text-1xl cursor-pointer"
            onClick={() => handleClick}
          >
            See All
          </span>
        </div>
        {coins?.length > 0 && (
          <div className="flex flex-row flex-wrap justify-between items-center">
            {coins?.map((coin) => (
              <Coin coin={coin} key={coin._id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(Home);
