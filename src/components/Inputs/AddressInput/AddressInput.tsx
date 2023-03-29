import { BaseInput } from "@/components/Inputs";

export const AddressInput = () => {
  return (
    <BaseInput
      name="withdrawAddress"
      label="Withdraw to"
      type="text"
      placeholder="kjJs8nUJ9ayJnisday89asdwq2ra..."
    >
      <div class="absolute text-white right-2.5 bottom-[16px] p-[5px] rounded-full bg-primary-color-o25">
        <img src="/icons/ui/address_icon.svg" />
      </div>
    </BaseInput>
  );
};
