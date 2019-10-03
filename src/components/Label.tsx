import React from "react";
import "./Label.scss";

interface ILabelProps {
  htmlFor: string;
}

export const Label: React.FC<ILabelProps> = ({
  children,
  htmlFor
}) =>
  <label
    className="invislabel"
    htmlFor={htmlFor}
  >
    {children}
  </label>
