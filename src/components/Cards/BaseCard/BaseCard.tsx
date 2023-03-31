import { JSX, Component, mergeProps } from "solid-js";

type BaseCardProps = {
  bg?: string | "bg-dark-bg" | "bg-max-dark";
  p?: string | "p-4" | "";
  children?: JSX.Element;
};

export const BaseCard: Component<BaseCardProps> = (props) => {
  const merged = mergeProps({ bg: "bg-dark-bg", p: "p-4" }, props);

  const styleString = `${merged.bg} ${merged.p}`;
  return (
    <div
      class={
        styleString +
        " w-full flex flex-col border border-color-borders rounded-lg"
      }
    >
      {props.children}
    </div>
  );
};
