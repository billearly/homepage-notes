import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { main } from "../theme";

const Container = styled.div`
  align-items: center;
  background-color: ${props => props.theme.colorBlueDark};
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100%;
`;

const FullScreenLayout = ({ children }) =>
  <ThemeProvider theme={main}>
    <Container>
      {children}
    </Container>
  </ThemeProvider>

export default FullScreenLayout;
