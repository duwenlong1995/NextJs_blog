import React, { ReactNode, memo } from "react";
import { changedClassNameButton, judgeFn } from "../util";
import "./index.scss";
import { Icon } from "@ducy/template-react-component-library";

interface LabelProps {
  children?: ReactNode;
  type?: string;
  icon?: string;
  onClick?: () => void;
}

const Label: React.FC<LabelProps> = ({ children, type, icon, onClick }) => {
  const LabelClass = changedClassNameButton("label", type);
  const judgeDom = (
    <span className="label_icon_bg">
      <Icon className="label_icon" iconName={icon} color={"black"} />
    </span>
  );
  return (
    <>
      <div className={LabelClass} onClick={onClick}>
        {judgeFn(judgeDom, icon)}
        <span className="label_font"> {children}</span>
      </div>
    </>
  );
};
export default Label;
