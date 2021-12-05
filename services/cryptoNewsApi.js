import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../shared/constants";

const createRequest = (url) => ({
  url,
  headers: {
    "Content-Type": "application/json",
    "x-auth-token": localStorage.getItem("accessToken"),
  },
});

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}/api` }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: ({ category, count }) => createRequest(`/news`),
    }),
    // getNews: builder.query({
    //   query: ({ category, count }) =>
    //     createRequest(
    //       `/news/search?q=${category}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
    //     ),
    // }),
  }),
});

export const { useGetNewsQuery } = cryptoNewsApi;
