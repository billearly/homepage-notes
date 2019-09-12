import React from "react";
import {
  GlobalStyle,
  Header,
  Note,
  Main,
  Footer,
  Container
} from "../components";
import { Helmet } from "react-helmet";
import Layout from "../layouts";

export default () => {
  return (
    <Layout>
      <>
        <Helmet>
          <title>Homepage Note</title>
          <link href="https://fonts.googleapis.com/css?family=Satisfy&display=swap" rel="stylesheet" />
        </Helmet>

        <GlobalStyle />

        <Main>
          <Container>
            <Header>Homepage Note</Header>
            <Note />
          </Container>

          <Footer
            link="https://github.com/billearly/homepage-notes"
            linkText="GitHub"
          />
        </Main>
      </>
    </Layout>
  );
};
