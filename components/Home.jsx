import React, { useState } from "react";
import StatCard from "./StatCard";

const { v4 } = require("uuid");

const Home = () => {
  const [stats, setStats] = useState([
    {
      id: v4(),
      text: "Total cryptocurrencies",
      total: 10,
    },
    {
      id: v4(),
      text: "Total market cap",
      total: 15,
    },
    {
      id: v4(),
      text: "Total exchanges",
      total: 5,
    },
    {
      id: v4(),
      text: "Total markets",
      total: 25,
    },
    {
      id: v4(),
      text: "Total 24h volume",
      total: 200,
    },
  ]);

  return (
    <div>
      <div>
        <h1 className="text-3xl custom-blue font-bold mb-4">
          Global Crypto Stats
        </h1>
        <div className="flex flex-row flex-wrap justify-between items-center">
          {stats.map((stat) => (
            <StatCard
              number={stat.total}
              percentile={stat.percentile}
              text={stat.text}
              key={stat.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
