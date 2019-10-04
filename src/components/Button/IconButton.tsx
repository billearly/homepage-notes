import React from "react";
import classnames from "classnames";
import "./IconButton.scss";

// Make this generic, values could be scss variables...
export enum IconButtonColor {
  Unknown,
  Default,
  White
}

interface IIconButtonProps {
  color?: IconButtonColor;
  onClick: (e: React.MouseEvent) => void;
}

export const IconButton: React.FC<IIconButtonProps> = ({
  color,
  onClick,
  children
}) => {
  const classes = classnames("iconbutton", {
    "iconbutton--white": color === IconButtonColor.White
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
