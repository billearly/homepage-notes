import React from "react";
import {
  GlobalStyle,
  Header,
  Note,
  Main,
  Container
} from "../components";
import { Helmet } from "react-helmet";

export default () => {
  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Caveat&display=swap" rel="stylesheet" />
      </Helmet>
      <GlobalStyle />

      <Main>
        <Container>
          <Header>Homepage Note</Header>
          <Note />
        </Container>
      </Main>
    </>
  );
};
