import React from "react";

const Loading = ({ theme }) => {
  return (
    <div
      className={
        theme === "dark"
          ? "loading bg-gray-800 text-gray-100 z-10 absolute loader min-h-screen h-full w-full flex flex-col justify-center items-center"
          : "bg-gray-200 z-10 absolute loader min-h-screen h-full w-full flex flex-col justify-center items-center"
      }
    >
      <div className="animate-spin  spinner mb-4 rounded-full"></div>
      <p className="text-3xl font-bold">Taking you to mars!!!</p>
    </div>
  );
};

export default Loading;
