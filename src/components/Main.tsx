import React from "react";
import "./Main.scss";

// This is specific to the main layout
// Seems badly named
export const Main: React.FC = ({ children }) =>
  <main className="wrapper">
    {children}
  </main>
