import React from "react";
import { SiGoogle } from "react-icons/si";

const GoogleButton = ({ text }) => {
  return (
    <div className="roundend-sm flex flex-row items-center justify-between google py-2 px-4 text-white">
      <SiGoogle />
      <span className="ml-4">{text}</span>
    </div>
  );
};

export default GoogleButton;
