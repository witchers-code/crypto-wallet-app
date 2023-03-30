import { JSX, Component } from "solid-js";

export const BaseCard: Component<{ children?: JSX.Element }> = (props) => {
  return (
    <div class="w-full flex flex-col bg-dark-bg border border-color-borders rounded-lg p-4">
      {props.children}
    </div>
  );
};
