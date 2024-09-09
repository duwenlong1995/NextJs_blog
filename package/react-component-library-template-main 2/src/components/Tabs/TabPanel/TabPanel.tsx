import React, { memo, ReactNode } from "react";
import "./TabPanel.scss";

export interface TabPanelProps {
  activeTabKey?: string;
  children?: ReactNode; // Use ReactNode for children type
  label: string;
  tabKey: string;
}

export const TabPanel = memo(function TabPanel({ activeTabKey, children, label, tabKey }: TabPanelProps) {
  return activeTabKey === tabKey ? <div className="TabPanelContainer">{children}</div> : null;
});
