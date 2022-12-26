import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

// export const cryptoApi = createApi({
//   reducerPath: "cryptoApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://api.coingecko.com/api/v3/coins/",
//   }),
//   endpoints: (build) => ({
//     getTrendingCoins: build.query<any, string>({
//       query: (currency) =>
//         `markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`,
//     }),
//   }),
// });

export const getTrendingCoins = async (currency: string) => {
  const data = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
  );
  const trendCoins = await data.json();
  return trendCoins;
};

export const getCoins = async (currency: string) => {
  const data = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
  );
  const coins = await data.json();
  return coins;
};

export const getCoin = async (id: string) => {
  const data = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  const coin = await data.json();
  return coin;
};

// export const { useGetTrendingCoinsQuery } = cryptoApi;
