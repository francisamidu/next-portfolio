import React from "react";

import Link from "next/link";
import { Button } from ".";

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-between p-4">
      <Link href="/">
        <a className="text-white font-bold text-1xl uppercase">Francis Amidu</a>
      </Link>
      <div className="flex flex-row items-center justify-end">
        <Link href="#work">
          <a className="text-md font-bold text-gray-100 mr-8 hover:text-gray-200 transition  duration">
            Work
          </a>
        </Link>
        <Link href="#about">
          <a className="text-md font-bold text-gray-100 mr-8 hover:text-gray-200 transition  duration">
            About
          </a>
        </Link>
        <Link href="#contact">
          <a className="text-md font-bold text-gray-100 mr-8">Contact</a>
        </Link>
        <Button
          link="/Francis-Amidu-Junior-Developer-Resume.pdf"
          text="Resume"
        />
      </div>
    </nav>
  );
};

export default Navbar;
