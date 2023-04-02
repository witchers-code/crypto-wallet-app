import { JSX, Component } from "solid-js";

type BaseInputProps = {
  name: string;
  label: string;
  placeholder: string;
  type: "text" | "number";
  value: string | number;
  onChange: JSX.EventHandler<HTMLInputElement, InputEvent>;
  children?: JSX.Element;
  valid: boolean;
  // valid: Accessor<boolean>;
};

export const BaseInput: Component<BaseInputProps> = (props) => {
  const invalidClass = props.valid
    ? ""
    : "border-pink-500 ring-pink-500 text-pink-600 focus:border-pink-500 focus:text-pink-600";

  console.log("BaseInput", props.valid);
  return (
    <>
      <label for={props.name} class="text-xs text-label-font my-2">
        {props.label}
      </label>
      <div class="flex relative items-center">
        <input
          type={props.type}
          id={props.name}
          name={props.name}
          class={
            invalidClass +
            " w-full mb-2 h-10 rounded py-2 px-3 pr-10 bg-max-dark border border-input-borders text-sm text-font text-white-font placeholder:text-input-color focus:outline-none focus:border-sky-500"
          }
          placeholder={props.placeholder}
          value={props.value}
          onInput={props.onChange}
        />
        {props.children}
      </div>
    </>
  );
};
