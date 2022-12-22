"use strict";
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
var _1 = require(".");
var Navbar = function () {
    return (<nav className="flex flex-row items-center justify-between p-4">
      <link_1["default"] href="/">
        <a className="text-white font-bold text-1xl uppercase">Francis Amidu</a>
      </link_1["default"]>
      <div className="flex flex-row items-center justify-end">
        <link_1["default"] href="#work">
          <a className="text-md font-bold text-gray-100 mr-8 hover:text-gray-200 transition  duration">
            Work
          </a>
        </link_1["default"]>
        <link_1["default"] href="#about">
          <a className="text-md font-bold text-gray-100 mr-8 hover:text-gray-200 transition  duration">
            About
          </a>
        </link_1["default"]>
        <link_1["default"] href="#contact">
          <a className="text-md font-bold text-gray-100 mr-8">Contact</a>
        </link_1["default"]>
        <_1.Button link="/Francis-Amidu-Junior-Developer-Resume.pdf" text="Resume"/>
      </div>
    </nav>);
};
exports["default"] = Navbar;
