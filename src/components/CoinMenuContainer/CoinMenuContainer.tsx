import { CoinListType } from "@/api/getCoinList";
import { SearchInput } from "@/components/Inputs";
import { Component, createSignal, JSX } from "solid-js";
import { CoinList } from "@/components/Lists";

type CoinMenuProps = {
  options: CoinListType[];
  clickItem: any;
};

export const CoinMenuContainer: Component<CoinMenuProps> = (props) => {
  const [coinList, setCoinList] = createSignal<CoinListType[]>(props.options);

  const handleSearch: JSX.EventHandler<HTMLInputElement, InputEvent> = (
    event
  ) => {
    const inputString = (event.currentTarget.value as string).toLowerCase();
    const filteredCoinList = props.options.filter(
      (option) =>
        option.name.toLowerCase().startsWith(inputString) ||
        option.ticker.toLowerCase().startsWith(inputString)
    );
    setCoinList(filteredCoinList);
  };

  return (
    <div class="w-full bg-secondary-bg rounded p-2 border border-color-borders">
      <SearchInput onInput={handleSearch} />
      <CoinList items={coinList()} clickItem={props.clickItem} />
    </div>
  );
};
