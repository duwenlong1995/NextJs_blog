import React, { memo } from "react";
import { iconData } from "./data";
import "./Icon.scss";
import { renderName, computedIconShow } from "./util";

export interface IconProps {
  className?: string;
  iconName?: string;
  color?: string;
  width?: string;
  height?: string;
}

export const Icon = memo((props: IconProps) => {
  const { className, iconName, color, width, height } = props;
  const size = { width: width ? width : "20", height: height ? height : "20" };
  return (
    <span className={renderName("icon_container", className)}>{computedIconShow(size, iconData, iconName, color)}</span>
  );
});
