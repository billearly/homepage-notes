import React from "react";
import { Helmet } from "react-helmet";
import { GlobalStyle, ErrorMessage } from "../components";
import { FullScreenLayout } from "../layouts/index.ts";

export default () => {
  return (
    <FullScreenLayout>
      <Helmet
        htmlAttributes={{
          lang: "en"
        }}
      >
        <title>Whoops</title>
        <meta name="Description" content="Jot down little notes to yourself" />
        <link href="https://fonts.googleapis.com/css?family=Satisfy|Roboto:300,400,500,700&display=swap" rel="stylesheet" />
      </Helmet>
      <GlobalStyle />

      <ErrorMessage
        header="Jot this down..."
        subHeader="Theres nothing here!"
        message="Whatever you were looking for isn't here. You should probably head back to the <a href='/'>homepage</a>"
        errorCode={404}
      />
    </FullScreenLayout>
  )
};
