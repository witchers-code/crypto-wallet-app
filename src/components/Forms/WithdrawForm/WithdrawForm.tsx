import { Component, createSignal } from "solid-js";
import { getCoinList } from "@/api/getCoinList";
import { BaseCard } from "@/components/Cards";
import { AddressInput, AmountInput } from "@/components/Inputs";
import { LimitInfo } from "@/components/Info";
import { Button } from "@/components/Buttons";
import { SelectCoinContainer } from "@/components/SelectCoinContainer";

export const WithdrawForm: Component = () => {
  return (
    <BaseCard>
      <h2 class="text-base text-white-font mb-3">Withdraw crypto</h2>
      <SelectCoinContainer options={getCoinList} />
      <AddressInput />
      <AmountInput />
      <hr class="border-color-borders my-2" />
      <div class="w-full grid grid-cols-2 justify-between gap-x-8 gap-y-2 mb-2">
        <LimitInfo label="Minimum amount" limit="0.000005 BTC" />
        <LimitInfo label="Maximum amount" limit="10.000000 BTC" />
        <LimitInfo label="Network fee" limit="~ 0.000005 BTC" />
      </div>
      <Button title="Withdraw" />
    </BaseCard>
  );
};
