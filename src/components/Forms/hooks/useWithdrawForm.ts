import { CoinListType } from "@/api/getCoinList";
import { useCoinSwitch } from "@/context/coinSwitch";
import { getRandomMinMax } from "@/utils";
import { createSignal, JSX } from "solid-js";
import { useValidationWithdraw } from "./useValidationWithdraw";

export interface InputDataType {
  coin: CoinListType;
  address: string;
  amount: number | string;
}

export interface LimitsAmountType {
  networkFee: number;
  minAmount: number;
  maxAmount: number;
}

export const useWithdrawForm = () => {
  const [coin] = useCoinSwitch();
  const [limits, setLimits] = createSignal<LimitsAmountType>({
    networkFee: Number(getRandomMinMax(0.000001, 0.000008).toFixed(6)),
    minAmount: Number(getRandomMinMax(0.00005, 0.0001).toFixed(6)),
    maxAmount: Number(getRandomMinMax(9.5, 15.5).toFixed(6)),
  });
  const [inputData, setInputData] = createSignal<InputDataType>({
    coin: coin,
    address: "",
    amount: "",
  });

  const {
    isValid,
    addressInputErrors,
    amountInputErrors,
    handleAddressValidation,
    handleAmountValidation,
  } = useValidationWithdraw(inputData, limits);

  const [emptyInputsError, setEmptyInputsError] = createSignal(false);

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

  const handleMaxBtn = () => {
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

  return {
    coin,
    inputData,
    setInputData,
    limits,
    isValid,

    handleChange,

    addressInputErrors,
    amountInputErrors,
    emptyInputsError,
    setEmptyInputsError,

    handleAddressValidation,
    handleAmountValidation,

    handleMaxBtn,
    handleSubmit,
  };
};
