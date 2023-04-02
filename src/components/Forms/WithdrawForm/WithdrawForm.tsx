import { Component, createEffect, createSignal, JSX } from "solid-js";
import { getCoinList } from "@/api/getCoinList";
import { BaseCard } from "@/components/Cards";
import { AddressInput, AmountInput } from "@/components/Inputs";
import { LimitInfo } from "@/components/Info";
import { Button } from "@/components/Buttons";
import { SelectCoinContainer } from "@/components/SelectCoinContainer";
import { useCoinSwitch } from "@/context/coinSwitch";
import { z } from "zod";

export const WithdrawForm: Component = () => {
  const [coin, setCoin] = useCoinSwitch();
  const [inputData, setInputData] = createSignal({
    coin: coin,
    address: "",
    amount: 0,
  });

  // const [isValid, setIsValid] = createSignal(
  //   {
  //     address: true,
  //     amount: true,
  //   },
  //   { equals: false }
  // );
  const [isAddressValid, setIsAddressValid] = createSignal(true);

  const [addressInputErrors, setAddressInputErrors] = createSignal<string[]>(
    []
  );

  const parseValidAddress = z
    .string()
    // .length(3, "Address should have length 32 symbols ")
    .startsWith("0x");
  // const formSchema = z.object({
  //   address: z
  //     .string()
  //     .length(3, "Address should have length 32 symbols ")
  //     .startsWith("0x"),
  //   amount: z.number().min(10),
  // });

  const handleChange: JSX.EventHandler<HTMLInputElement, InputEvent> = (
    event
  ) => {
    let value;
    if (event.currentTarget.type === "number")
      value = +event.currentTarget.value;
    else value = event.currentTarget.value;

    setInputData({
      ...inputData(),
      [event.currentTarget.name]: value,
    });

    const validAddress = parseValidAddress.safeParse(inputData().address);
    // const parseResult = formSchema.safeParse(inputData());

    if (!validAddress.success) {
      setIsAddressValid(false);
      // setIsValid((current) => {
      //   current.address = false;
      //   return current;
      // });
      setAddressInputErrors(validAddress.error.format()._errors);
    } else {
      setIsAddressValid(true);
      // setIsValid({ ...isValid(), address: true });
      // validAddress.data;
    }
  };

  // createEffect(() => {
  //   console.log("coin switch", coin);
  // }, [coin, inputData()]);

  return (
    <BaseCard>
      <h2 class="text-base text-white-font mb-3">Withdraw crypto</h2>
      <SelectCoinContainer options={getCoinList} />
      <AddressInput
        value={inputData().address}
        onChange={handleChange}
        valid={isAddressValid()}
      />
      {addressInputErrors().length > 0
        ? addressInputErrors().map((error, index) => (
            <p class="text-xs text-pink-600">
              {index + 1}. {error}
            </p>
          ))
        : null}
      {/*  */}
      <AmountInput
        value={inputData().amount}
        onChange={handleChange}
        valid={true}
      />

      <hr class="border-color-borders my-2" />
      <div class="w-full grid grid-cols-2 justify-between gap-x-8 gap-y-2 mb-2">
        <LimitInfo label="Minimum amount" limit="0.000005 BTC" />
        <LimitInfo label="Maximum amount" limit="10.000000 BTC" />
        <LimitInfo label="Network fee" limit="~ 0.000005 BTC" />
      </div>
      <Button title="Withdraw" onClick={() => {}} />
    </BaseCard>
  );
};
