import type { Meta, StoryObj } from "@storybook/react";
import { Box, BoxProps } from "./Box";
import React from "react";

const meta: Meta<typeof Box> = {
  title: "通用/Box",
  component: Box,
  argTypes: {},
};

export default meta;
type Story = StoryObj<BoxProps>;

export const Primary: Story = {
  args: {
    className: "box_div",
    modifiers: ["flex", "flexJustifyCenter", "flexAlignCenter"],
    children: (
      <>
        <div>文本1</div> <div>文本2</div> <div>文本3</div>
      </>
    ),
  },
};
