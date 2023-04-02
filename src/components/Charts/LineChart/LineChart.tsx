import {
  createChart,
  ColorType,
  WhitespaceData,
  AreaData,
} from "lightweight-charts";
import { Component, createEffect } from "solid-js";

interface Pending {
  loading: true;
  error: false;
  (): undefined;
}
interface Success<T> {
  loading: false;
  error: false;
  (): T;
}
interface Failure {
  loading: false;
  error: any;
  (): undefined;
}

type ChartComponentProps = {
  data: (WhitespaceData | AreaData)[];
  colors?: any;
};

export const LineChart: Component<ChartComponentProps> = (props) => {
  let chartContainerRef: HTMLDivElement;

  const {
    colors: {
      backgroundColor = "rgba(255, 255, 255, 0)",
      lineColor = "#5AB88B",
      textColor = "#7685A0",
      areaTopColor = "rgba(255, 255, 255, 0)",
      areaBottomColor = "rgba(255, 255, 255, 0)",
    } = {},
  } = props;

  createEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.clientWidth });
    };

    const chart = createChart(chartContainerRef, {
      layout: {
        background: { type: ColorType.Solid, color: backgroundColor },
        textColor,
      },
      width: chartContainerRef.clientWidth,
      height: 320,
      grid: {
        vertLines: {
          visible: false,
        },
        horzLines: {
          visible: false,
        },
      },
    });
    chart.timeScale().fitContent();

    const series = chart.addAreaSeries({
      lineColor,
      topColor: areaTopColor,
      bottomColor: areaBottomColor,
      lineWidth: 2,
    });
    series.setData(props.data);

    window.addEventListener("resize", handleResize);

    chart.timeScale().fitContent();
    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, [
    props.data,
    backgroundColor,
    lineColor,
    textColor,
    areaTopColor,
    areaBottomColor,
  ]);
  return (
    <div class="w-full h-full bg-max-dark">
      <div ref={chartContainerRef!} />
    </div>
  );
};
