import React, { ReactNode, memo } from "react";
import "./Box.scss";
import { changedClassName } from "./utils";

export interface BoxProps {
  children?: ReactNode; // 支持任意类型的子元素，包括嵌套
  className?: string;
  modifiers?: string[];
  style?: {};
}

export const Box = memo(({ children, className, modifiers, style }: BoxProps) => {
  // 合成 className
  const combinedClassName = changedClassName(modifiers ? modifiers : [], className ? className : "default");
  const renderChildren = (children: ReactNode) => {
    return React.Children.map(children, child => {
      if (React.isValidElement(child)) {
        return React.cloneElement(React.createElement(child.type, child.props), { className: child.props.className });
      }
      return child;
    });
  };
  return (
    <>
      <div className={combinedClassName} style={style}>
        {renderChildren(children)}
      </div>
    </>
  );
});
