import type { Meta, StoryObj } from "@storybook/react";
import { Icon, IconProps } from "./Icon";

const meta: Meta<IconProps> = {
  title: "通用/Icon",
  component: Icon,
  argTypes: {
    className: {},
    iconName: {
      control: { type: "select" },
      options: ["upload_defeat", "upload_success", "arrow_right"],
    },
    color: { control: "color" },
    width: {},
    height: {},
  },
};

export default meta;
type Story = StoryObj<IconProps>;

export const Primary: Story = {
  args: {
    className: "icon_img",
    iconName: "upload_defeat",
    color: "black",
    width: "20",
    height: "20",
  },
};
