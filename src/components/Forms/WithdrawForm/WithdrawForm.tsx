import { Component } from "solid-js";
import { getCoinList } from "@/api/getCoinList";
import { BaseCard } from "@/components/Cards";
import { AddressInput, AmountInput, ErrorMessage } from "@/components/Inputs";
import { LimitInfo } from "@/components/Info";
import { Button } from "@/components/Buttons";
import { SelectCoinContainer } from "@/components/SelectCoinContainer";

import { useWithdrawForm } from "../hooks/useWithdrawForm";

export const WithdrawForm: Component = () => {
  const {
    coin,
    inputData,
    limits,
    isValid,

    addressInputErrors,
    amountInputErrors,
    emptyInputsError,

    handleAddressValidation,
    handleAmountValidation,

    handleChange,
    handleMaxBtn,
    handleSubmit,
  } = useWithdrawForm();

  return (
    <BaseCard>
      <h2 class="text-base text-white-font mb-3">Withdraw crypto</h2>
      <SelectCoinContainer options={getCoinList} />
      <AddressInput
        value={inputData().address}
        onChange={handleChange}
        valid={isValid().address}
        onBlur={handleAddressValidation}
      />
      <ErrorMessage errors={addressInputErrors()} />
      <AmountInput
        value={Number(inputData().amount) > 0 ? Number(inputData().amount) : ""}
        onChange={handleChange}
        valid={true}
        onBlur={handleAmountValidation}
        maxOnClick={handleMaxBtn}
      />
      <ErrorMessage errors={amountInputErrors()} />
      <hr class="border-color-borders my-2" />
      <div class="w-full  grid  grid-cols-2 justify-between gap-x-4 gap-y-2 mb-2">
        <LimitInfo
          label="Minimum amount"
          limit={`${String(limits().minAmount).padEnd(8, "0")} ${coin.ticker}`}
        />
        <LimitInfo
          label="Maximum amount"
          limit={`${String(limits().maxAmount).padEnd(9, "0")} ${coin.ticker}`}
        />
        <LimitInfo
          label="Network fee"
          limit={`~ ${String(limits().networkFee).padEnd(7, "0")} ${
            coin.ticker
          }`}
        />
      </div>
      <ErrorMessage
        errors={
          emptyInputsError()
            ? ["Empty Input. Please fill all input fields"]
            : []
        }
      />
      <Button
        title="Withdraw"
        onClick={handleSubmit}
        disabled={Object.values(isValid()).includes(false)}
      />
    </BaseCard>
  );
};
