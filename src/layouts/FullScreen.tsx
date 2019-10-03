import React from "react";
import "../components/assets/global.scss";
import "./FullScreen.scss";

export const FullScreenLayout = ({ children }) =>
  <div className="full-screen">
    {children}
  </div>
