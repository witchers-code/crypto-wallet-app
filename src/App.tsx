import type { Component } from "solid-js";
import { WithdrawForm } from "@/components/Forms";
import { MenuCoin } from "./components/Lists";

import { getCoinList } from "@/api/getCoinList";

const App: Component = () => {
  return (
    <div class="h-screen bg-dark-bg p-5">
      <img src="/logo/logo-nightly.svg" />
      <div class="flex mt-20 mx-10">
        <div class="w-1/4">
          <WithdrawForm />
        </div>
      </div>
    </div>
  );
};

export default App;
