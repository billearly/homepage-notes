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
          <title>Jot</title>
          <meta name="Description" content="Jot down little notes to yourself" />
          <link href="https://fonts.googleapis.com/css?family=Satisfy&display=swap" rel="stylesheet" />
        </Helmet>

        <GlobalStyle />

        <Container>
          <Header
            name="Jot"
          />

          <Main>
            <Note
              label="Jot down a note..."
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
