import { Component } from "solid-js";

type LimitInfoProps = {
  label: string;
  limit: string;
};

export const LimitInfo: Component<LimitInfoProps> = (props) => {
  return (
    <div>
      <p class="inline-block text-xs text-label-font my-2">{props.label}</p>
      <p class="inline-block text-base text-white-font">{props.limit}</p>
    </div>
  );
};
