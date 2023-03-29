import { CoinListType } from "@/api/getCoinList";
import { Component } from "solid-js";

type SelectCoinProps = {
  options: CoinListType[];
};

export const SelectCoin: Component<SelectCoinProps> = (props) => {
  return (
    <>
      <label for="coinSearch" class="text-xs text-label-font my-2">
        Select a coin
      </label>
      <button
        id="coinSearch"
        class="flex justify-between mb-2 h-10 bg-secondary-bg rounded py-2 px-3 text-sm text-white-font"
      >
        <div class="flex items-center h-full">
          <img src={props.options[0].icon} class="h-full mr-2" />
          {props.options[0].name}
          <span class="ml-1 text-label-font">({props.options[0].ticker})</span>
        </div>
        <div class="flex items-center h-full text-label-font">
          <p class="mx-2">{props.options[0].balance}</p>
          <img src="/icons/ui/arrow-down.svg" class="h-50" />
        </div>
      </button>
    </>
  );
};
