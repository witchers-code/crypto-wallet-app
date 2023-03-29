import type { Component } from "solid-js";
import { WithdrawForm } from "@/components/Forms";

const App: Component = () => {
  return (
    <div class="h-screen bg-dark-bg p-5">
      <img src="/logo/logo-nightly.svg" />
      <div class="mt-20 mx-10">
        <WithdrawForm />
      </div>
    </div>
  );
};

export default App;
