import Head from "next/head";
import React from "react";
import Header from "../components/Header";

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
    </>
  );
};

export default Home;
