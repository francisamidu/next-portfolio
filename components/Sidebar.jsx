import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

import { useData } from "../contexts/DataContext";

const { v4 } = require("uuid");

import { BiHome, BiCoin, BiSend, BiNews, BiLayout } from "react-icons/bi";

const Sidebar = () => {
  const { data } = useData();
  const { name } = data;

  const [links, setLinks] = useState([
    {
      active: true,
      id: v4(),
      name: "home",
      text: "Home",
    },
    {
      active: false,
      id: v4(),
      name: "currency",
      text: "Currencies",
    },
    {
      active: false,
      id: v4(),
      name: "exchange",
      text: "Exchanges",
    },
    {
      active: false,
      id: v4(),
      name: "news",
      text: "News",
    },
  ]);

  const renderIcon = (name, active) => {
    switch (name) {
      case "home":
        return (
          <BiHome className={active ? "text-blue-500" : "text-gray-500"} />
        );
      case "currency":
        return (
          <BiCoin className={active ? "text-blue-500" : "text-gray-500"} />
        );
      case "exchange":
        return (
          <BiSend className={active ? "text-blue-500" : "text-gray-500"} />
        );
      case "news":
        return (
          <BiNews className={active ? "text-blue-500" : "text-gray-500"} />
        );
      default:
        return null;
    }
  };

  //Toggles active and inactive link state
  const toggleLink = (id) => {
    const updatedLinks = links.map((link) => {
      if (link.id === id) {
        return {
          ...link,
          active: true,
        };
      }
      return {
        ...link,
        active: false,
      };
    });
    setLinks(updatedLinks);
  };

  return (
    <>
      <Head>
        <title>{name} - Dashboard</title>
      </Head>
      <section className="flex flex-col py-4 px-2 sidebar col-start-1 cols-end-2 min-h-screen h-full">
        <div className="brand pt-4 mr-4 text-center">
          <Link href="/">
            <a className="uppercase text-sm font-bold">{name}</a>
          </Link>
        </div>
        <div className="links flex flex-col py-4">
          {links.map((link) => (
            <p
              onClick={() => toggleLink(link.id)}
              key={link.id}
              className={
                link.active
                  ? "flex flex-row items-center py-2 px-4 rounded-md link mt-2 active"
                  : "flex flex-row items-center py-2 px-4 rounded-md link mt-2"
              }
            >
              {renderIcon(link.name, link.active)}
              <span
                className={
                  link.active ? "ml-4 text-gray-100" : "ml-4 text-gray-500"
                }
              >
                {link.text}
              </span>
            </p>
          ))}
        </div>
        <div className="py-5 px-4 border-t border-gray-500 text-center collapse flex flex-row items-center">
          <BiLayout className="text-gray-500" />
          <span className="ml-4 text-gray-500">Collapse Sidebar</span>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
