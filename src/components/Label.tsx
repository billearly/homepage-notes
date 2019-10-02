import React from "react";
import "./Label.scss";

export const Label: React.FC = ({ children }) =>
  <label className="invislabel">
    {children}
  </label>
