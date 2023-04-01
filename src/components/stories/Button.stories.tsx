import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";
import { Button, ButtonProps } from "@/components/Buttons";

type Story = StoryObj<ButtonProps>;

// // export const Default: Story = {
// //   args: {
// //     title: "Press me!",
// //     onClick: () => {},
// //   },
// // };

export default {
  title: "Default/Button",
  // tags: ["autodocs"],
  render: (props: ButtonProps) => <Button {...props} />,
  argTypes: {
    title: { control: "string" },
  },
} as Meta<ComponentProps<typeof Button>>;

// export const Default = () => <Button title="Press me!" onClick={() => {}} />;

export const Primary = () => {
  return <Button title={`Clickedtimes`} onClick={() => {}} />;
};
