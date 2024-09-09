import React, { ReactNode } from "react";

type IconItem = {
  name?: string;
  DOM: (size: { width: string; height: string }, color: string) => ReactNode;
};

export const computedIconShow = (
  size: { width: string; height: string },
  value?: IconItem[],
  name?: string,
  color = "black",
) => {
  return (
    <>
      {value?.map((item, index) => {
        switch (item.name) {
          case name:
            return (
              <span style={{ display: "flex", justifyContent: "center", alignItems: "center" }} key={index}>
                {item.DOM(size, color)}
              </span>
            );
          default:
            return null; // 不匹配时返回 null，不渲染任何内容
        }
      })}
    </>
  );
};

export const renderName = (name: string, newName?: string) => {
  return [name, newName].join(" ");
};
