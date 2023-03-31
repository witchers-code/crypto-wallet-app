export const fetchCoinData = async (coin: string) =>
  (
    await fetch(
      `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=30&interval=daily`
    )
  ).json();
