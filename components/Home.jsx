import React from "react";

import Button from "./Button";

const Home = () => {
  return (
    <div className="home px-6 h-full flex flex-col justify-center items-center">
      <div className="w-full mb-4">
        <h2 className="text-sm text-gray-200 uppercase text-center">
          Frontend Developer
        </h2>
        <h1 className="md:text-5xl text-3xl text-center text-white leading-snug font-bold md:w-2/4 w-full m-auto my-4">
          I build fast responsive modern websites that run across browsers and
          platforms
        </h1>
      </div>
      <div className="mt-4 flex flex-row justify-center items-center">
        <Button link="#contact" text="Hire me today" />
      </div>
    </div>
  );
};

export default Home;
