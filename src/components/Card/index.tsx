import { ReactNode } from "react";
import "./index.scss";

interface cardProps {
  bgColor: string;
  children?: ReactNode;
  style?: {};
  className?: string;
}
const Card = ({ bgColor, children, style, className }: cardProps) => {
  const style_obj = Object.assign({ backgroundColor: bgColor }, style);
  return (
    <>
      <div className={className} style={style_obj}>
        {children}
      </div>
    </>
  );
};
export default Card;
