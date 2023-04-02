import { CoinListType } from "@/api/getCoinList";
import { getIconByTicker } from "@/api/getIconByTicker";
import {
  createSignal,
  createContext,
  JSX,
  useContext,
  Accessor,
  Setter,
} from "solid-js";
import { createStore } from "solid-js/store";

const initialState = {
  name: "Bitcoin",
  ticker: "BTC",
  apiName: "bitcoin",
  icon: getIconByTicker("BTC"),
  balance: 0.0522103,
};

export type CoinSwitchContextType = [
  //   coin: Accessor<CoinListType>,
  coin: CoinListType,
  setCoin: Setter<CoinListType>
];

export const CoinSwitchContext = createContext<CoinSwitchContextType>();

type ProviderProps = {
  children?: JSX.Element;
};

export const CoinSwitchProvider = (props: ProviderProps) => {
  const [coin, setCoin] = createStore(initialState);

  return (
    <CoinSwitchContext.Provider value={[coin, setCoin]}>
      {props.children}
    </CoinSwitchContext.Provider>
  );
};

export const useCoinSwitch = () => useContext(CoinSwitchContext)!;
