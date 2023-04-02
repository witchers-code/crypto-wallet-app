import { getIconByTicker } from "@/api/getIconByTicker";

export type CoinListType = {
  name: string;
  ticker: string;
  apiName: string;
  icon: string;
  balance: number;
};

export const getCoinList: CoinListType[] = [
  {
    name: "Bitcoin",
    ticker: "BTC",
    apiName: "bitcoin",
    icon: getIconByTicker("BTC"),
    balance: 0.0522103,
  },
  {
    name: "Ethereum",
    ticker: "ETH",
    apiName: "ethereum",
    icon: getIconByTicker("ETH"),
    balance: 1.2522103,
  },
  {
    name: "USD Coin",
    ticker: "USDC",
    apiName: "usd-coin",
    icon: getIconByTicker("USDC"),
    balance: 1045.55,
  },
  {
    name: "TerherUS",
    ticker: "USDT",
    apiName: "tether",
    icon: getIconByTicker("USDT"),
    balance: 445.55,
  },
  {
    name: "NEAR Protocol",
    ticker: "NEAR",
    apiName: "near",
    icon: getIconByTicker("NEAR"),
    balance: 1.0345,
  },
  {
    name: "Aptos",
    ticker: "APT",
    apiName: "aptos",
    icon: getIconByTicker("APT"),
    balance: 2.00245,
  },
];
