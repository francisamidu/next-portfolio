import React from "react";
import Link from "next/link";
import { BiHome, BiCoin, BiSend, BiNews } from "react-icons/bi";

const Sidebar = () => {
  return (
    <section className="flex flex-col p-4 bg-black">
      <div className="brand">
        <Link href="/">
          <a>Cryptohub</a>
        </Link>
      </div>
      <div className="links flex flex-col items-center p-4">
        <Link>
          <a className="flex flex-row items-center justify-around py-4 px-8 rounded link">
            <BiHome className="text-blue-500" />
            <span>Home</span>
          </a>
        </Link>
        <Link>
          <a className="flex flex-row items-center justify-around py-4 px-8 rounded link">
            <BiCoin className="text-blue-500" />
            <span>Currencies</span>
          </a>
        </Link>
        <Link>
          <a className="flex flex-row items-center justify-around py-4 px-8 rounded link">
            <BiSend className="text-blue-500" />
            <span>Exchanges</span>
          </a>
        </Link>
        <Link>
          <a className="flex flex-row items-center justify-around py-4 px-8 rounded link">
            <BiNews className="text-blue-500" />
            <span>News</span>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Sidebar;
