"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var About = function () {
    return (<div className="py-8 md:max-w-screen-lg md:m-auto md:px-0 px-10 mt-8" id="about">
      <div className="flex sm:flex-row flex-col items-center justify-center">
        <div className="sm:mr-3 mr-0 sm:w-1/2 w-full px-4">
          <div className="mt-4">
            <h2 className="text-1xl text-white">
              {"I'm"} always learning and evolving my knowledge of the frontend
              but here is a selection of tech i use on the regular
            </h2>
            <div className="my-4">
              <span className="font-bold text-md about-title">Languages</span>
              <p className="text-gray-200">
                Html5, Css3/Sass, Javascript(ESNext), Typescript, Graphql,
                Solidity, C# and Python.
              </p>
            </div>
            <div className="mb-4">
              <span className="font-bold text-md about-title">
                Libraries and Frameworks
              </span>
              <p className="text-gray-200">
                React, Nextjs, Web3.js, Web3.py, Ethers.js, Nodejs, Express,
                Tailwindcss and Flask.
              </p>
            </div>
            <div className="mb-4">
              <span className="font-bold text-md about-title">Other Tools</span>
              <p className="text-gray-200">
                Git, Github, MongoDB, MySQL, Webpack, Terminal.
              </p>
            </div>
          </div>
          <h2 className="text-1xl">
            Recently {"I've"} been broadening my horizon by learning all about
            C#(ASP.NET {"&"} Game development) and React Native. I generally
            have interest in building decentralized e-commerce and fintech apps.
          </h2>
        </div>
        <div className="relative sm:w-1/2 sm:block hidden px-4">
          <image_1["default"] width="500" height="500" layout="intrinsic" src="/undraw_developer_activity_bv83.svg"/>
        </div>
      </div>
    </div>);
};
exports["default"] = About;
