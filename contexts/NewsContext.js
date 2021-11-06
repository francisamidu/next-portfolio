import { createContext, useContext, useState } from "react";

const { v4: uuidv4 } = require("uuid");

const newsContext = createContext();

export const NewsContextProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [trendingNews, setTrendingNews] = useState({
    id: uuidv4(),
    title:
      "Acquire raises $4.5m in a series B round funding with IBM,Oracle and Venture Capital",
    link: "http://news.bing.com/search?tag=acquire-series-round-funding",
  });

  return (
    <newsContext.Provider value={{ trendingNews }}>
      {children}
    </newsContext.Provider>
  );
};

export const useNewsContext = () => useContext(newsContext);
