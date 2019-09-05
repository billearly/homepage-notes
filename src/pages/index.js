import React from "react";
import {
  GlobalStyle,
  Note,
  Main,
  Container
} from "../components";

export default () => {
  return (
    <>
      <GlobalStyle />

      <Main>
        <Container>
          <h1>Homepage Notes</h1>
          <Note />
        </Container>
      </Main>
    </>
  );
};
