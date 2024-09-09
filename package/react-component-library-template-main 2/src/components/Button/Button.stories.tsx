import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

// 定义 Meta 类型
const meta: Meta<ButtonProps> = {
  title: "通用/Button",
  component: Button,
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["primary", "dynamic", "secondary", "text", "link"],
    },
    children: {
      control: { type: "text" },
    },
    icon: {
      control: { type: "text" },
    },
  },
};

export default meta;

// 定义 Story 类型
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    type: "primary",
    icon: "arrow_right",
    children: "按钮文字",
    onClick: () => {
      console.log("按钮点击了");
    },
    style: { marginLeft: "10px" },
  },
};
