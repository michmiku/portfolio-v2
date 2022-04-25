import { cx, css } from "@emotion/css";
import React from "react";
type IconInt = {
  width?: number;
  height?: number;
  color?: string;
  children: JSX.Element[] | JSX.Element;
  onClick?: any;
  ref?: any;
};

const Icon = ({
  width,
  height,
  color,
  onClick,
  children,
  ref = null,
}: IconInt) => {
  return (
    <span
      ref={ref}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      className={cx(
        ``,
        css`
          width: ${width ? `${width}px` : "auto"};
          height: ${height || 20}px;
          span {
            width: ${width ? `${width}px` : "auto"};
            height: ${height || 20}px;
            background: ${color || "transparent"};
            padding: 0 !important;
          }
          svg {
            width: ${width ? `${width}px` : "auto"};
            height: ${height || 20}px;
            color: ${color || "black"};
            padding: 0 !important;
          }
        `
      )}
    >
      {children}
    </span>
  );
};

export default Icon;
