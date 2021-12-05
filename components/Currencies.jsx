import React, { memo, useEffect, useState } from "react";

import Coin from "./Coin";

import millify from "millify";
import { useGetCoinsQuery } from "../services/cryptoApi";
import formatPrice from "../helpers/formatPrice";

const Currencies = () => {
  const { data } = useGetCoinsQuery(simplified);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    if (allData?.data?.coins) {
      const { coins: coinData } = allData.data;

      setCoins(
        coinData.map((coin) => ({
          ...coin,
          dailyChange: millify(coin.change),
          marketCap: millify(coin.marketCap),
          price: formatPrice(coin.price),
        }))
      );
    }
  }, [data]);
  return (
    <div>
      <h1 className="text-3xl custom-blue font-bold mb-4">
        Top 100 Cryptocurrencies in the world
      </h1>
      {coins?.length > 0 && (
        <div className="flex flex-row flex-wrap justify-between items-center">
          {coins?.map((coin) => (
            <Coin coin={coin} key={coin._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(Currencies);
