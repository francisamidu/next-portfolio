import React, { memo, useState, useEffect } from "react";

import NewsCard from "./NewsCard";

import { useGetNewsQuery } from "../services/cryptoNewsApi";

import formatDate from "../helpers/formatDate";

const providers = [
  {
    name: "MSN",
    image: "/bitcoin-logo.png",
  },
  {
    name: "BBC",
    image: "/coin-phone.jpg",
  },
  {
    name: "Aljazeera",
    image: "/coinbase-logo.png",
  },
  {
    name: "Yahoo News",
    image: "/dotted-logo.png",
  },
  {
    name: "Google News",
    image: "/ethereum-logo.png",
  },
  {
    name: "Bing News",
    image: "/sadan-logo.png",
  },
  {
    name: "Reason",
    image: "/transcript-logo.png",
  },
  {
    name: "Yahoo!Finance",
    image: "/coin-phone.jpg",
  },
  {
    name: "Business Insider",
    image: "/coinbase-logo.png",
  },
  {
    name: "Analytics Insight",
    image: "/dotted-logo.png",
  },
];
const News = () => {
  const { data, isLoading } = useGetNewsQuery({
    category: "Cryptocurrency",
    count: 100,
  });
  const [news, setNews] = useState([]);

  useEffect(() => {
    if (data?.value) {
      const newsData = data.value.map((item, index) => ({
        ...item,
        datePublished: formatDate(item.datePublished),
        provider: providers[index].name,
        providerImage: decodeURIComponent(providers[index].image),
      }));
      setNews(newsData);
    }
  }, [data]);

  return (
    <div>
      <h1 className="text-3xl custom-blue font-bold mb-4">Top Crypto News</h1>
      {news?.length > 0 && (
        <div className="flex flex-row flex-wrap justify-between">
          {news?.map((item) => (
            <NewsCard item={item} key={item._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(News);
