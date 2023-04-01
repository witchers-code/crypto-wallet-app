import type { Component } from "solid-js";

export type ButtonProps = {
  title: string;
  onClick: () => void;
};

export const Button: Component<ButtonProps> = (props) => {
  return (
    <button
      onClick={props.onClick}
      class="mt-4 bg-primary-color py-1.5 px-4 rounded text-white text-sm hover:bg-primary-dark transition-colors duration-300"
    >
      {props.title}
    </button>
  );
};
