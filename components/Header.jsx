import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import TrendingItem from "./TrendingItem";

const Header = () => {
  return (
    <section className="flex pt-12 relative flex-col">
      <TrendingItem />
      <nav className="flex flex-row items-center md:justify-between justify-around py-2 px-8">
        <Link href="/">
          <a className="text-3xl font-bold text-blue-600">Cryptohub</a>
        </Link>
        <div className="flex flex-row justify-between item-center">
          <Link href="login">
            <a className="text-1xl text-gray-600 hover:text-gray-400">Login</a>
          </Link>
          <Link href="/signup">
            <a className="text-1xl text-gray-500"></a>
          </Link>
        </div>
      </nav>
      <div className="px-8 flex flex-row justify-between items-center">
        <div className="flex flex-col text-gray-500 mr-12 px-8 w-3/4">
          <h1 className="text-4xl text-blue-900 font-bold mb-4">
            Cryptocurrency news and data belongs in your dashboard
          </h1>
          <p className="leading-7 my-4">
            Cryptohub is the industry-leading dashboard for keeping you up to
            date with everything crypto. From trending news to exchanges to
            coins we have it all under one roof. Be ahead of your competition
            with latest trends
          </p>
          <Button text="Get Started Today" />
        </div>
        <Image
          src="/bitcoin.jpg"
          alt="Bitcoin illustration"
          width="1024"
          height="1024"
          className="w-1/2 h-full"
        />
      </div>
    </section>
  );
};

export default Header;
