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
        <Helmet
          htmlAttributes={{
            lang: "en"
          }}
        >
          <title>Homepage Note</title>
          <meta name="Description" content="Write little notes to yourself" />
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
