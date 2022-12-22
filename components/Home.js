"use strict";
exports.__esModule = true;
var react_1 = require("react");
var _1 = require(".");
var Home = function () {
    return (<div className="home px-6 h-full flex flex-col justify-center items-center">
      <div className="w-full mb-4">
        <h2 className="text-sm text-gray-200 uppercase text-center">
          Full-Stack Software Developer
        </h2>
        <h1 className="md:text-5xl text-3xl text-center text-white leading-snug font-bold md:w-2/4 w-full m-auto my-4">
          Going the extra mile to develop and deliver elegant web experiences
          across browsers
        </h1>
      </div>
      <div className="mt-4 flex flex-row justify-center items-center">
        <_1.Button link="#contact" text="Hire me today"/>
      </div>
    </div>);
};
exports["default"] = Home;
