import React from "react";
import Image from "next/image";

const FeatureItem = ({ image, item }) => {
  return (
    <div className="feature flex md:flex-row flex-col justify-center items-center md:w-1/2 w-full">
      <Image
        src={image}
        width="400"
        height="400"
        className="image mr-4 md:w-1/2 w-full"
      />
      <div className="pt-8 md:w-1/2 w-full pl-8 content">
        <p className="flex flex-row justify-center md:justify-start items-center mr-2">
          <span className="tag bg-blue-100 rounded px-4 py-1 text-blue-500">{`Step ${item.step}`}</span>
          <span className="text-2xl font-bold tag bg-blue-150 px-4 py-2 text-blue-900">
            {item.name}
          </span>
        </p>
        <p className="text-gray-500 mt-4">{item.text}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
