import React from "react";

import Link from "next/link";

const Button = ({ link, text }) => {
  const renderButton = link ? (
    <Link href={link}>
      <a className="flex flex-row justify-center items-center main-btn py-2 h-12 leading-normal px-8 text-center text-white capitalize rounded-md">
        <span>{text}</span>
      </a>
    </Link>
  ) : (
    <button className="main-btn py-2 px-6 text-center text-white capitalize rounded-md">
      {text}
    </button>
  );

  return <>{renderButton}</>;
};

export default Button;
