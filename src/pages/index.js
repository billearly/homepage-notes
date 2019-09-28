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
          <title>Jote</title>
          <meta name="Description" content="Jot down little notes to yourself" />
          <link href="https://fonts.googleapis.com/css?family=Satisfy|Roboto:300,400,500,700&display=swap" rel="stylesheet" />
        </Helmet>

        <GlobalStyle />

        <Container>
          <Header
            name="Jote"
            infoHeader="What is Jote..."
            contentList={[
              {
                type: "info",
                body: "Its pretty simple. Jote is a place to quickly write down a note, a thought, an idea. Just open up the site and get it down quickly"
              },
              {
                type: "info",
                body: "No account needed, just get going"
              },
              {
                type: "warning",
                body: "Don't enter import information that you want kept a secret. Since there is no account, everything gets saved to your browser"
              }
            ]}
          />

          <Main>
            <Note
              titleLabel="Title"
              inputLabel="Note"
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
