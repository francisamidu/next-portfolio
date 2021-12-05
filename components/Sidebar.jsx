import React, { useState } from "react";
import Link from "next/link";

import { useData } from "../contexts/DataContext";

const { v4 } = require("uuid");

import { BiHome, BiCoin, BiSend, BiNews } from "react-icons/bi";

const Sidebar = ({ theme, setTheme, setPage, page }) => {
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
      name: "currencies",
      text: "Currencies",
    },
    {
      active: false,
      id: v4(),
      name: "exchanges",
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
      case "currencies":
        return (
          <BiCoin className={active ? "text-blue-500" : "text-gray-500"} />
        );
      case "exchanges":
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

  //Toggles link states and page
  const toggleLinkAndPage = (name) => {
    const updatedLinks = links.map((link) => {
      if (link.name === name) {
        setPage(link.name);
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

  //Toggle theme from light to dark and back
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <section className="flex flex-col py-4 px-2 sidebar fixed col-start-1 cols-end-2 min-h-screen h-full w-full">
        <div className="brand pt-4 mr-4 text-center">
          <Link href="/">
            <a className="uppercase text-sm font-bold">{name}</a>
          </Link>
        </div>
        <div className="links flex flex-col flex-grow py-4">
          {links.map((link) => (
            <p
              onClick={() => toggleLinkAndPage(link.name)}
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
        <div className="flex flex-row justify-between items-center px-4">
          <input
            type="checkbox"
            name=""
            id="toggle"
            className="hidden"
            hidden
            onChange={() => toggleTheme()}
          />
          <span
            className={theme === "dark" ? "text-gray-500" : "text-gray-800"}
          >
            Dark mode
          </span>
          <label htmlFor="toggle" className="switch-container">
            <div
              className={
                theme === "dark"
                  ? "w-9 h-5 items-center rounded-full bg-blue-500 p-1 flex items-center"
                  : "w-9 h-5 items-center rounded-full bg-gray-300 p-1 flex items-center"
              }
            >
              <div className="switch transform duration-300 ease-in-out w-4 h-4 bg-white rounded-full shadow-md"></div>
            </div>
          </label>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
