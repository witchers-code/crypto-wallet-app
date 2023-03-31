import { BaseCard } from "@/components/Cards";
import { LineChart } from "../LineChart/LineChart";
import { Component } from "solid-js";
import { AreaData, WhitespaceData } from "lightweight-charts";

type LineChartContainerProps = {
  data: (WhitespaceData | AreaData)[];
  loading: boolean;
  error: boolean;
};

export const LineChartContainer: Component<LineChartContainerProps> = (
  props
) => {
  return (
    <BaseCard bg="bg-dark-bg" p="">
      {props.loading ? (
        <div class="flex h-[20rem] w-full justify-center items-center text-white-font">
          Loading...
        </div>
      ) : null}
      {props.error ? (
        <div class="flex h-[20rem] w-full justify-center items-center text-white-font">
          Chart API Error. Please refresh a page.
        </div>
      ) : null}
      {!props.loading && !props.error && <LineChart data={props.data} />}
    </BaseCard>
  );
};
