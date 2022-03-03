import React from "react";

const About = () => {
  return (
    <div
      className="py-8 md:max-w-screen-lg md:m-auto md:px-0 px-10 mt-8"
      id="about"
    >
      <h1 className="text-2xl about-heading">
        I'm a Frontend Developer with a desire for driving high-performance
        accessible web experiences. {"I'm"} constantly working to design
        quality, user-friendly and scalable products regardless of the stack
      </h1>
      <div className="mt-4">
        <h2 className="text-1xl text-gray-300">
          {"I'm"} always learning and evolving my knowledge of the frontend but
          here is a selection of tech i use on the regular
        </h2>
        <div className="my-4">
          <span className="font-bold text-md about-title">Languages</span>
          <p className="text-gray-300">
            Html5, Css3/Sass, Javascript(ESNext), Typescript, Graphql
          </p>
        </div>
        <div className="mb-4">
          <span className="font-bold text-md about-title">
            Libraries and Frameworks
          </span>
          <p className="text-gray-300">
            React, Nextjs, Nodejs, Express, Tailwindcss
          </p>
        </div>
        <div className="mb-4">
          <span className="font-bold text-md about-title">Other Tools</span>
          <p className="text-gray-300">
            Git, Github, Sequlize, Webpack, Terminal
          </p>
        </div>
      </div>
      <h2 className="text-1xl">
        Recently {"I've"} been broadening my horizon by learning all about the
        Blockchain(Smart contracts, web3js, ethers, truffle, hardhat),
        C#(ASP.NET) and React Native. I mostly have interest in building
        decentralized and fintech apps
      </h2>
    </div>
  );
};

export default About;
