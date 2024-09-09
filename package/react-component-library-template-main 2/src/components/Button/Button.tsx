import React, { ReactNode, CSSProperties, memo } from "react";
import { changedClassNameButton, judgeFn } from "./util";
import "./Button.scss";
import { Icon } from "../Icon/Icon";

export interface ButtonProps {
  children?: ReactNode;
  type?: "primary" | "dynamic" | "secondary" | "text" | "link";
  icon?: string;
  onClick?: () => void;
  style?: CSSProperties;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = memo(({ children, type, icon, onClick, style, disabled, ...props }) => {
  const buttonClass = changedClassNameButton("btn", type);
  const judgeDom = (
    <span className="btn_icon_bg">
      <Icon className="btn_icon" iconName={icon} color={"black"} />
    </span>
  );
  return (
    <>
      {children ? (
        <button {...props} className={buttonClass} onClick={onClick} disabled={disabled} style={style}>
          {type !== "dynamic" ? null : judgeFn(judgeDom, icon)}
          <span className="btn_text"> {children}</span>
        </button>
      ) : null}
    </>
  );
});
