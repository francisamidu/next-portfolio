import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState({
    name: "Cryptohub",
    year: new Date().getFullYear(),
  });

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
