import { AreaData, WhitespaceData } from "lightweight-charts";

export type DataAPICoinGecko = {
  prices: number[][];
  market_caps: number[][];
  total_volumes: number[][];
};

export const formatDataForLightchart = (data: DataAPICoinGecko) => {
  let formattedData: (WhitespaceData | AreaData)[] = [];

  data.prices.forEach((item: number[]) => {
    const date = new Date(item[0]);
    date.toISOString();
    formattedData.push({
      time: date.toISOString().split("T")[0],
      value: item[1],
    });
  });
  formattedData.pop();
  return formattedData;
};
