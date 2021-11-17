import React from "react";
import StatCard from "./StatCard";

const Home = ({ stats }) => {
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
    </div>
  );
};

export default Home;
