import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import TrendingItem from "./TrendingItem";

import router from "next/router";

const Header = () => {
  const handleClick = (event) => {
    router.push("/login");
  };

  return (
    <section className="flex md:pt-12 pt-4 relative flex-col">
      <TrendingItem
        link="https://news.bing.com/query=anything"
        title="Bitcoin reclaims the first position as market stabilizes"
      />
      <nav className="flex flex-row items-center  justify-between md:px-8 py-2 px-4">
        <Link href="/">
          <a className="text-3xl font-bold">Cryptohub</a>
        </Link>
        <div className="flex flex-row justify-between item-center">
          <Link href="/login">
            <a className="text-1xl text-gray-600 mr-4 hover:text-gray-400">
              Login
            </a>
          </Link>
          <Link href="/signup">
            <a className="text-1xl text-gray-600 hover:text-gray-400">Signup</a>
          </Link>
        </div>
      </nav>
      <div className="px-8 mt-20 md:mt-0 flex md:flex-row flex-col justify-between items-center">
        <div className="flex flex-col md:block text-gray-500 md:w-2/4 w-full md:text-left text-center px-4 md:px-8 items-center">
          <h1 className="text-4xl font-bold mb-4 leading-11">
            More than just a crypto prices tracking dashboard
          </h1>
          <p className="leading-7 my-8">
            Cryptohub is the industry-leading dashboard for keeping you up to
            date with everything crypto. From trending news to exchanges to
            coins we have it all under one roof. Be ahead of your competition
            with latest trends
          </p>
          <Button text="Get Started Today" onClick={handleClick} />
        </div>
        <Image
          src="/bitcoin.jpg"
          alt="Bitcoin illustration"
          width="1000"
          height="960"
          className="w-1/2 h-full"
        />
      </div>
    </section>
  );
};

export default Header;
