import { Component, createEffect, createSignal, JSX } from "solid-js";
import { CoinListType, getCoinList } from "@/api/getCoinList";
import { BaseCard } from "@/components/Cards";
import { AddressInput, AmountInput } from "@/components/Inputs";
import { LimitInfo } from "@/components/Info";
import { Button } from "@/components/Buttons";
import { SelectCoinContainer } from "@/components/SelectCoinContainer";
import { useCoinSwitch } from "@/context/coinSwitch";
import { z } from "zod";
import { getRandomMinMax } from "@/utils";

interface InputDataType {
  coin: CoinListType;
  address: string;
  amount: number | string;
}

export const WithdrawForm: Component = () => {
  const [coin, setCoin] = useCoinSwitch();
  const [limits, setLimits] = createSignal({
    networkFee: Number(getRandomMinMax(0.000001, 0.000008).toFixed(6)),
    minAmount: Number(getRandomMinMax(0.00005, 0.0001).toFixed(6)),
    maxAmount: Number(getRandomMinMax(9.5, 15.5).toFixed(6)),
  });

  const [inputData, setInputData] = createSignal<InputDataType>({
    coin: coin,
    address: "",
    amount: "",
  });

  const [isValid, setIsValid] = createSignal({
    address: true,
    amount: true,
  });

  const [addressInputErrors, setAddressInputErrors] = createSignal<string[]>(
    []
  );
  const [amountInputErrors, setAmountInputErrors] = createSignal<string[]>([]);
  const [emptyInputsError, setEmptyInputsError] = createSignal(false);

  const parseValidAddress = z
    .string()
    .length(32, "Address should have length 32 symbols")
    .startsWith("0x")
    .regex(
      /^(?=.*[A-Z])(?=.*[!@#$%^&*()])(?=.*[0-9]).+$/,
      "Address should contain at least one uppercase letter, one special character, and one number"
    );

  const parseValidAmount = z
    .number()
    .positive("Amount can't be 0")
    .min(
      limits().minAmount,
      `Amount must be great than or equal to ${limits().minAmount}`
    )
    .max(
      limits().maxAmount,
      `Amount must be less than or equal to ${limits().maxAmount}`
    );

  const handleChange: JSX.EventHandler<HTMLInputElement, InputEvent> = (
    event
  ) => {
    setEmptyInputsError(false);
    let value;
    if (event.currentTarget.type === "number")
      value = +event.currentTarget.value;
    else value = event.currentTarget.value;

    setInputData({
      ...inputData(),
      [event.currentTarget.name]: value,
    });

    if (!isValid().address) {
      handleAddressValidation();
    }
    if (!isValid().amount) {
      handleAmountValidation();
    }
  };

  const handleAddressValidation = () => {
    const validAddress = parseValidAddress.safeParse(inputData().address);
    // const parseResult = formSchema.safeParse(inputData());

    if (!validAddress.success) {
      setIsValid({ ...isValid(), address: false });
      setAddressInputErrors(validAddress.error.format()._errors);
    } else {
      setAddressInputErrors([]);
      setIsValid({ ...isValid(), address: true });
      // validAddress.data;
    }
  };

  const handleAmountValidation = () => {
    const validAmount = parseValidAmount.safeParse(inputData().amount);
    // const parseResult = formSchema.safeParse(inputData());

    if (!validAmount.success) {
      setIsValid({ ...isValid(), amount: false });
      setAmountInputErrors(validAmount.error.format()._errors);
    } else {
      setAmountInputErrors([]);
      setIsValid({ ...isValid(), amount: true });
      // validAddress.data;
    }
  };
  const handleMaxBtn = () => {
    // setInputData((current) => {
    //   current.amount = maxAmount;
    //   return current;
    // });

    setInputData({ ...inputData(), amount: Number(limits().maxAmount) });
  };

  const handleSubmit = () => {
    if (
      inputData().address.trim() === "" ||
      String(inputData().amount).trim() === ""
    ) {
      setEmptyInputsError(true);
    } else {
      setEmptyInputsError(false);
      alert(
        "Withdraw successful!" +
          "\n Coin: " +
          inputData().coin.name +
          "\n Address:" +
          inputData().address +
          "\n Amount:" +
          `${Number(inputData().amount) - limits().networkFee}`
      );
    }
  };

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
      {addressInputErrors().length > 0
        ? addressInputErrors().map((error, index) => (
            <p class="text-xs text-pink-600">
              {index + 1}. {error}
            </p>
          ))
        : null}
      <AmountInput
        value={Number(inputData().amount) > 0 ? Number(inputData().amount) : ""}
        onChange={handleChange}
        valid={true}
        onBlur={handleAmountValidation}
        maxOnClick={handleMaxBtn}
      />
      {amountInputErrors().length > 0
        ? amountInputErrors().map((error, index) => (
            <p class="text-xs text-pink-600">
              {index + 1}. {error}
            </p>
          ))
        : null}
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
      {emptyInputsError() ? (
        <p class="text-xs text-pink-600">
          Empty Input. Please fill all input fields
        </p>
      ) : null}
      <Button
        title="Withdraw"
        onClick={handleSubmit}
        disabled={Object.values(isValid()).includes(false)}
      />
    </BaseCard>
  );
};
