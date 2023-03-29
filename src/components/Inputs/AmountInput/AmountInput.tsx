import { BaseInput } from "@/components/Inputs";

export const AmountInput = () => {
  return (
    <BaseInput
      name="amount"
      label="Amount"
      type="number"
      placeholder="Enter amount"
    >
      <button class="absolute text-white right-3 bottom-[18px] px-2 py-1 rounded bg-primary-color-o25 hover:bg-primary-color-o50">
        <p class="leading-none z-20 text-primary-font text-xs">Max</p>
      </button>
    </BaseInput>
  );
};
