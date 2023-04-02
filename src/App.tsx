import { Component } from "solid-js";
import { CoinSwitchProvider } from "./context/coinSwitch";
import { Withdraw } from "./view/Withdraw/Withdraw";

const App: Component = () => {
  return (
    <div class="p-5 max-w-[1536px] mx-auto">
      <img src="/logo/logo-nightly.svg" />
      <CoinSwitchProvider>
        <Withdraw />
      </CoinSwitchProvider>
    </div>
  );
};

export default App;
