import React from "react";
import "./Container.scss";

// This is badly named
export const Container: React.FC = ({ children }) =>
  <div className="container">
    {children}
  </div>
