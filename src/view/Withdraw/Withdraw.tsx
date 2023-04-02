import { fetchCoinData } from "@/api/fetchCoinData";
import { formatDataForLightchart } from "@/api/formatDataForLightchart";
import { LineChartContainer } from "@/components/Charts";
import { WithdrawForm } from "@/components/Forms";
import { useCoinSwitch } from "@/context/coinSwitch";
import { AreaData, WhitespaceData } from "lightweight-charts";
import { createEffect, createResource, createSignal } from "solid-js";

export const Withdraw = () => {
  const [coin, setCoin] = useCoinSwitch();
  const [coinData, { refetch }] = createResource(
    () => coin.apiName,
    fetchCoinData
  );
  const [chartData, setChartata] = createSignal<(WhitespaceData | AreaData)[]>(
    []
  );

  createEffect(() => {
    if (coinData()) {
      setChartata(formatDataForLightchart(coinData()));
    }
  }, [coin]);

  return (
    <div class="flex relative mt-20 mx-auto 2xl:w-[1280]">
      <div class="flex lg:w-1/4 md:w-1/2 w-full">
        <WithdrawForm />
      </div>
      <div class="w-3/4 ml-8">
        <LineChartContainer
          data={chartData()}
          loading={coinData.loading}
          error={coinData.error}
        />
      </div>
    </div>
  );
};
