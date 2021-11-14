import React from "react";
import { useData } from "../contexts/DataContext";

const Footer = () => {
  const { data } = useData();
  const { name, year } = data;
  return (
    <footer className="py-8 px-20 bt-2 b-blue-100 md:text-left text-center">
      <p className="text-gray-500">
        &copy; Copyright {year} {name}
      </p>
    </footer>
  );
};

export default Footer;
