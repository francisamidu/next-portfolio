import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import TokenIntro from "../components/TokenIntro";
import Features from "../components/Features";

const Home = () => {
  return (
    <>
      <Head>
        <title>Cryptohub - The best crypto dashboard on the internet</title>
        <meta
          name="description"
          content="Your next favorite crypto dashboard"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <TokenIntro />
      <Features />
    </>
  );
};

export default Home;
