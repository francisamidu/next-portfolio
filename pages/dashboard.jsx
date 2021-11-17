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

const Dashboard = () => {
  const { auth } = useAuth();

  const [theme, setTheme] = useState("light");
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState("home");

  const { data } = useData();
  const { name } = data;

  const { data: allData, isFetching } = useGetCoinsQuery();
  // const { stats } = allData?.data;
  console.log(allData);
  const [coinStats, setCoinStats] = useState([]);
  // if (stats) {
  //   setStats([
  //     {
  //       id: v4(),
  //       text: "Total cryptocurrencies",
  //       total: stats?.total,
  //     },
  //     {
  //       id: v4(),
  //       text: "Total market cap",
  //       total: stats?.totalMarketCap,
  //     },
  //     {
  //       id: v4(),
  //       text: "Total exchanges",
  //       total: stats?.totalExchanges,
  //     },
  //     {
  //       id: v4(),
  //       text: "Total markets",
  //       total: stats?.totalMarkets,
  //     },
  //     {
  //       id: v4(),
  //       text: "Total 24h volume",
  //       total: stats?.total24hVolume,
  //     },
  //   ]);
  // }

  const getComponent = () => {
    switch (page) {
      case "currencies":
        return <Currencies />;
      case "exchanges":
        return <Exchanges />;
      case "news":
        return <News />;
      default:
        return <Home stats={coinStats} />;
    }
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    if (!auth.isAuthenticated && !accessToken && !refreshToken) {
      router.push("/login");
    } else {
      if (!isFetching) {
        setIsLoading(false);
      }
    }
  });
  return (
    <>
      <Head>
        <title>{name} - Dashboard</title>
      </Head>
      <main
        className={
          theme === "light"
            ? "dashboard grid min-h-screen relative overflow-hidden"
            : "dashboard grid min-h-screen relative overflow-hidden dark"
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
