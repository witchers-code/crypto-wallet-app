import { BaseCard } from "@/components/Cards";
import { LineChart } from "../LineChart/LineChart";
import {
  Component,
  createEffect,
  createResource,
  createSignal,
} from "solid-js";
import { AreaData, WhitespaceData } from "lightweight-charts";
import { fetchCoinData } from "@/api/fetchCoinData";
import { useCoinSwitch } from "@/context/coinSwitch";
import { formatDataForLightchart } from "@/api/formatDataForLightchart";

export const LineChartContainer: Component = () => {
  const [coin] = useCoinSwitch();
  const [coinData] = createResource(() => coin.apiName, fetchCoinData);
  const [chartData, setChartata] = createSignal<(WhitespaceData | AreaData)[]>(
    []
  );

  createEffect(() => {
    if (coinData()) {
      setChartata(formatDataForLightchart(coinData()));
    }
  }, [coin]);

  return (
    <BaseCard bg="bg-dark-bg" p="">
      {coinData.loading ? (
        <div class="flex h-[20rem] w-full justify-center items-center text-white-font">
          Loading...
        </div>
      ) : null}
      {coinData.error ? (
        <div class="flex h-[20rem] w-full justify-center items-center text-white-font">
          Chart API Error. Please refresh a page.
        </div>
      ) : null}
      {!coinData.loading && !coinData.error && <LineChart data={chartData()} />}
    </BaseCard>
  );
};
