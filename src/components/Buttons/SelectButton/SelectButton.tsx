import { CoinListType } from "@/api/getCoinList";
import { CoinMenuContainer } from "@/components/CoinMenuContainer";
import { Component, Show, createSignal, onCleanup, onMount } from "solid-js";

type SelectButtonProps = {
  onClick: () => void;
  icon: string;
  title: string;
  span?: string;
  span2?: string;
};

export const SelectButton: Component<SelectButtonProps> = (props) => {
  return (
    <button
      id="coinSearch"
      class="flex w-full  justify-between mb-2 h-10 bg-secondary-bg rounded py-2 px-3 text-sm text-white-font"
      onClick={props.onClick}
    >
      <div class="flex items-center h-full">
        <img src={props.icon} class="h-full mr-2" />
        {props.title}
        <span class="ml-1 text-label-font">{props.span}</span>
      </div>
      <div class="flex items-center h-full text-label-font">
        <p class="mx-2">{props.span2}</p>
        <img src="/icons/ui/arrow-down.svg" class="h-50" />
      </div>
    </button>
  );
};
