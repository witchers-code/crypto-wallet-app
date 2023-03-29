import { JSX, Component } from "solid-js";

type BaseInputProps = {
  name: string;
  label: string;
  type: "text" | "number";
  placeholder: string;
  children?: JSX.Element;
};

export const BaseInput: Component<BaseInputProps> = (props) => {
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
          class="w-full mb-2 h-10 rounded py-2 px-3 pr-10 bg-max-dark border border-input-borders text-sm text-input-color placeholder:input-color focus:outline-none focus:border-sky-500 invalid:border-pink-500 invalid:text-pink-600
    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          placeholder={props.placeholder}
        />
        {props.children}
      </div>
    </>
  );
};
