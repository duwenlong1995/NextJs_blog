import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsProps } from "./Tabs";
import { TabPanel, TabPanelProps } from "./TabPanel";

const meta: Meta<TabsProps> = {
  title: "通用/Tabs",
  component: Tabs,
  argTypes: {
    location: {
      control: "select",
      options: ["left", "middle", "right"],
    },
  },
};

export default meta;

type Story = StoryObj<TabsProps>;

export const Primary: Story = {
  args: {
    defaultTabKey: "tab1",
    location: "middle",
    footer: false,
    children: (
      <>
        <TabPanel tabKey="tab1" label="基础页">
          1111
        </TabPanel>
        <TabPanel tabKey="tab2" label="增强页">
          2222
        </TabPanel>
        <TabPanel tabKey="tab3" label="扩展页">
          3333
        </TabPanel>
      </>
    ),
  },
};
