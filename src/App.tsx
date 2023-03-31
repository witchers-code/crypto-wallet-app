import { Component } from "solid-js";
import { CoinSwitchProvider } from "./context/coinSwitch";
import { Withdraw } from "./view/Withdraw/Withdraw";

const App: Component = () => {
  return (
    <div class="h-screen bg-dark-bg p-5">
      <img src="/logo/logo-nightly.svg" />
      <CoinSwitchProvider>
        <Withdraw />
      </CoinSwitchProvider>
    </div>
  );
};

export default App;
