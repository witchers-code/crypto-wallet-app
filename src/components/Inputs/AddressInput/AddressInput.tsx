import { BaseInput } from "@/components/Inputs";
import { Accessor, Component, JSX } from "solid-js";

type AddressInputProps = {
  value: string;
  onChange: JSX.EventHandler<HTMLInputElement, InputEvent>;
  valid: boolean;
  onBlur: any;
  //   valid: Accessor<boolean>;
};

export const AddressInput: Component<AddressInputProps> = (props) => {
  return (
    <BaseInput
      name="address"
      label="Withdraw to"
      type="text"
      placeholder="kjJs8nUJ9ayJnisday89asdwq2ra..."
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
      valid={props.valid}
    >
      <div class="absolute text-white right-2.5 bottom-[16px] p-[5px] rounded-full bg-primary-color-o25">
        <img src="/icons/ui/address_icon.svg" />
      </div>
    </BaseInput>
  );
};
