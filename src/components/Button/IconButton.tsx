import React, { ButtonHTMLAttributes } from "react";
import classnames from "classnames";
import "./IconButton.scss";

// Make this generic, values could be scss variables...
export enum IconButtonColor {
  Unknown,
  Default,
  White
}

interface IIconButtonProps {
  iconColor?: IconButtonColor;
  onClick: (e: React.MouseEvent) => void;
}

export const IconButton: React.FC<IIconButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  iconColor,
  onClick,
  children,
  className
}) => {
  const classes = classnames("iconbutton", className, {
    "iconbutton--white": iconColor === IconButtonColor.White,
  });

  return (
    <button
      className={classes}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
