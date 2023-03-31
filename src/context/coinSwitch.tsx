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

const initialState = {
  name: "Bitcoin",
  ticker: "BTC",
  apiName: "bitcoin",
  icon: getIconByTicker("BTC"),
  balance: 0.0522103,
};

export type CoinSwitchContextType = [
  coin: Accessor<CoinListType>,
  setCoin: Setter<CoinListType>
];

export const CoinSwitchContext = createContext<CoinSwitchContextType>();

type ProviderProps = {
  children?: JSX.Element;
};

export const CoinSwitchProvider = (props: ProviderProps) => {
  const [coin, setCoin] = createSignal<CoinListType>(initialState);
  //   const value: CoinSwitchContextType = [coin, setCoin];
  return (
    <CoinSwitchContext.Provider value={[coin, setCoin]}>
      {props.children}
    </CoinSwitchContext.Provider>
  );
};

export const useCoinSwitch = () => useContext(CoinSwitchContext)!;
