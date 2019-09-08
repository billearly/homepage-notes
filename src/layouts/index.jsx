import React from "react";
import { ThemeProvider } from "styled-components";
import { main } from "../theme";

const Layout = ({ children }) =>
  <ThemeProvider theme={main}>
    {children}
  </ThemeProvider>

export default Layout;
