import { parseValidAddress, parseValidAmount } from "../validation";
import { Accessor, createSignal } from "solid-js";
import { InputDataType, LimitsAmountType } from "./useWithdrawForm";

export const useValidationWithdraw = (
  inputData: Accessor<InputDataType>,
  limits: Accessor<LimitsAmountType>
) => {
  const [isValid, setIsValid] = createSignal({
    address: true,
    amount: true,
  });
  const [addressInputErrors, setAddressInputErrors] = createSignal<string[]>(
    []
  );
  const [amountInputErrors, setAmountInputErrors] = createSignal<string[]>([]);

  const handleAddressValidation = () => {
    const validAddress = parseValidAddress.safeParse(inputData().address);

    if (!validAddress.success) {
      setIsValid({ ...isValid(), address: false });
      setAddressInputErrors(validAddress.error.format()._errors);
    } else {
      setAddressInputErrors([]);
      setIsValid({ ...isValid(), address: true });
    }
  };

  const handleAmountValidation = () => {
    const validAmount = parseValidAmount(
      limits().minAmount,
      limits().maxAmount
    ).safeParse(inputData().amount);

    if (!validAmount.success) {
      setIsValid({ ...isValid(), amount: false });
      setAmountInputErrors(validAmount.error.format()._errors);
    } else {
      setAmountInputErrors([]);
      setIsValid({ ...isValid(), amount: true });
    }
  };

  return {
    isValid,
    addressInputErrors,
    amountInputErrors,
    handleAddressValidation,
    handleAmountValidation,
  };
};
