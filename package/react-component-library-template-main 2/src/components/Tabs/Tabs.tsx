import React, { memo, useState, ReactNode, useEffect } from "react";
import { changeClassName } from "./util";
import "./Tabs.scss";

export interface TabsProps {
  children?: ReactNode; // 允许单个或多个子节点
  defaultTabKey?: string;
  location?: "left" | "middle" | "right";
  footer?: boolean;
}

export const Tabs = memo(function Tabs({ defaultTabKey = "tab1", children, location = "middle", footer }: TabsProps) {
  const [activeTabKey, setActiveTabKey] = useState<string>(defaultTabKey);
  const [locationName, setLocationName] = useState<"left" | "middle" | "right" | undefined>(location);
  const tabs = React.isValidElement(children) ? children.props.children : [];
  useEffect(() => {
    if (location) {
      setLocationName(changeClassName(location));
    }
  }, [location]);
  return (
    <div>
      <div className={"TabsContainer" + " " + locationName}>
        {tabs.map((item: any) => (
          <span
            key={item.props.tabKey} // 保证 tabKey 是唯一的
            className={activeTabKey === item.props.tabKey ? "TabItemActive" : "TabItemUnActive"}
            onClick={() => setActiveTabKey(item.props.tabKey)}
          >
            {item.props.label}
          </span>
        ))}
      </div>
      <div>
        {tabs.map((item: any) =>
          React.cloneElement(item, {
            ...item.props,
            activeTabKey,
            key: item.props.tabKey,
          }),
        )}
      </div>
      {footer && <div className="TabsFooter">footer</div>}
    </div>
  );
});
