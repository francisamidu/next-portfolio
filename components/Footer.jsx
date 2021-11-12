import React, { useState } from "react";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  return (
    <footer className="py-8 px-20 bt-2 b-blue-100 md:text-left text-center">
      <p className="text-gray-500">&copy; Copyright {year} Cryptohub</p>
    </footer>
  );
};

export default Footer;
