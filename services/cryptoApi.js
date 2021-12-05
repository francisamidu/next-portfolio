import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../shared/constants";

const createRequest = (url) => ({
  url,
  headers: {
    "Content-Type": "application/json",
    "x-auth-token": localStorage.getItem("accessToken"),
  },
});

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}/api` }),
  endpoints: (builder) => ({
    getExchanges: builder.query({
      query: () => createRequest("/exchanges"),
    }),
    getCoins: builder.query({
      query: (count) => createRequest(`/coins?${count}`),
    }),
  }),
});

export const { useGetExchangesQuery, useGetCoinsQuery } = cryptoApi;
