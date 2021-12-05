import React, { useEffect, useState } from "react";
import Head from "next/head";
import router from "next/router";

import Sidebar from "../components/Sidebar";
import Loading from "../components/Loading";
import News from "../components/News";
import Currencies from "../components/Currencies";
import Exchanges from "../components/Exchanges";
import Content from "../components/Content";
import Home from "../components/Home";

import { useAuth } from "../contexts/AuthContext";
import { useData } from "../contexts/DataContext";
import { useGetExchangesQuery, useGetCoinsQuery } from "../services/cryptoApi";

import millify from "millify";
import formatPrice from "../helpers/formatPrice";
const { v4 } = require("uuid");

const Dashboard = () => {
  const { auth } = useAuth();

  const [theme, setTheme] = useState("light");
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState("home");
  const [simplified, setSimplified] = useState(true);
  const [coinStats, setCoinStats] = useState([]);
  const [coins, setCoins] = useState([]);

  const { data } = useData();
  const { name } = data;

  const { data: allData } = useGetCoinsQuery(simplified ? 10 : 100);
  useEffect(() => {
    if (allData?.data?.stats) {
      setCoinStats([
        {
          id: v4(),
          text: "Base Currency",
          total: allData.data.stats.base,
        },
        {
          id: v4(),
          text: "Total cryptocurrencies",
          total: millify(allData.data.stats.total),
        },
        {
          id: v4(),
          text: "Total market cap",
          total: millify(allData.data.stats.totalMarketCap),
        },
        {
          id: v4(),
          text: "Total exchanges",
          total: millify(allData.data.stats.totalExchanges),
        },
        {
          id: v4(),
          text: "Total markets",
          total: millify(allData.data.stats.totalMarkets),
        },
        {
          id: v4(),
          text: "Total 24h volume",
          total: millify(allData.data.stats.total24hVolume),
        },
      ]);
    }
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
  }, [allData]);

  const getComponent = () => {
    switch (page) {
      case "currencies":
        return <Currencies />;
      case "exchanges":
        return <Exchanges />;
      case "news":
        return <News />;
      default:
        return <Home stats={coinStats} coins={coins} setPage={setPage} />;
    }
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    if (!auth.isAuthenticated && !accessToken && !refreshToken) {
      router.push("/login");
    } else {
      setIsLoading(false);
    }
  }, [undefined]);
  return (
    <>
      <Head>
        <title>{name} - Dashboard</title>
      </Head>
      <main
        className={
          theme === "light"
            ? "relative dashboard grid min-h-screen relative overflow-hidden"
            : "relative dashboard grid min-h-screen relative overflow-hidden dark"
        }
      >
        {isLoading && <Loading theme={theme} />}
        <Sidebar setTheme={setTheme} theme={theme} setPage={setPage} />
        <Content Component={getComponent()} />
      </main>
    </>
  );
};

export default Dashboard;
