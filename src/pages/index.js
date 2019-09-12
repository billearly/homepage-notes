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

        <Container>
          <Main>
            <Header>Homepage Note</Header>
            <Note
              placeholder="Write a note to yourself..."
            />
          </Main>

          <Footer
            link="https://github.com/billearly/homepage-notes"
            linkText="GitHub"
          />
        </Container>
      </>
    </Layout>
  );
};
