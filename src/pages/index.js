import React from "react";
import {
  GlobalStyle,
  Header,
  Note,
  Main,
  Container
} from "../components";
import { Helmet } from "react-helmet";
import Layout from "../layouts";

export default () => {
  return (
    <Layout>
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
    </Layout>
  );
};
