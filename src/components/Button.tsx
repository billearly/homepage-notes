import React from "react";
import classnames from "classnames";
import "./Button.scss";

export enum ButtonType {
  Unknown,
  Default,
  Outline
}

interface IButtonProps {
  type?: ButtonType
  onClick: (e: React.MouseEvent) => void
}

export const Button: React.FC<IButtonProps> = ({
  type,
  onClick,
  children
}) => {
  const classes = classnames("cta", {
    "cta--outline": type === ButtonType.Outline
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
