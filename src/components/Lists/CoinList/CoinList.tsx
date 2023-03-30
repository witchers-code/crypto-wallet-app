import { CoinListType } from "@/api/getCoinList";
import { Component, For } from "solid-js";

type CoinListProps = {
  items: CoinListType[];
  clickItem: (ticker: string) => void;
};

export const CoinList: Component<CoinListProps> = (props) => {
  return (
    <ul>
      <For each={props.items}>
        {(option) => (
          <li
            onClick={() => props.clickItem(option.ticker)}
            class="cursor-pointer flex items-center h-10 py-2 px-2 rounded text-sm text-white-font hover:bg-dark-bg"
          >
            <img src={option.icon} class="h-full mr-2" />
            {option.name}
            <span class="ml-1 text-label-font">({option.ticker})</span>
          </li>
        )}
      </For>
    </ul>
  );
};
