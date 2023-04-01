import { CoinListType } from "@/api/getCoinList";
import { SelectButton } from "@/components/Buttons";
import { CoinMenuContainer } from "@/components/CoinMenuContainer";
import { useCoinSwitch } from "@/context/coinSwitch";
import { Component, Show, createSignal, onCleanup, onMount } from "solid-js";

type SelectCoinProps = {
  options: CoinListType[];
};

export const SelectCoinContainer: Component<SelectCoinProps> = (props) => {
  let ref: HTMLDivElement;
  const [isOpenMenu, setIsOpenMenu] = createSignal(false);
  // const [coin, setCoin] = createSignal<CoinListType>(props.options[0]);
  const [coin, setCoin] = useCoinSwitch();

  const setWithdrawCoin = (ticker: string) => {
    const coin = props.options.filter((item) => item.ticker === ticker)[0];
    setCoin(coin);
    setIsOpenMenu(false);
  };

  const handleMenuClick = () => setIsOpenMenu(true);
  // const handleClick = (event: MouseEvent) => {
  //   if (isOpenMenu() && ref && !ref.contains((event as any).target)) {
  //     setIsOpenMenu(false);
  //   }
  // };

  // onMount(() => {
  //   document.addEventListener("click", handleClick);
  // });

  // onCleanup(() => {
  //   document.removeEventListener("click", handleClick);
  // });

  return (
    <>
      <label for="coinSearch" class="text-xs text-label-font my-2">
        Select a coin
      </label>
      <div class="flex w-full relative">
        <SelectButton
          onClick={handleMenuClick}
          icon={coin.icon}
          title={coin.name}
          span={`(${coin.ticker})`}
          span2={`${coin.balance}`}
        />
        <Show when={isOpenMenu()}>
          <div ref={ref!} class="absolute z-50 w-full">
            <CoinMenuContainer
              options={props.options}
              clickItem={setWithdrawCoin}
            />
          </div>
        </Show>
      </div>
    </>
  );
};
