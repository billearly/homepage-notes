import React from "react";
import { Helmet } from "react-helmet";
import {
  Header,
  Footer,
  ContentType // should rename this
} from "../components";
import "../components/assets/global.scss";
import "./Main.scss";

export const MainLayout = ({ children }) =>
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

    <div className="main-layout">
      <Header
        name="Jote"
        infoHeader="What is Jote..."
        contentList={[
          {
            type: ContentType.Info,
            body: "Its pretty simple. Jote is a place to quickly write down a note, a thought, an idea. Just open up the site and get it down quickly"
          },
          {
            type: ContentType.Info,
            body: "No account needed, just get going"
          },
          {
            type: ContentType.Warning,
            body: "Don't enter import information that you want kept a secret. Since there is no account, everything gets saved to your browser"
          }
        ]}
      />

      <main>
        {children}
      </main>

      <Footer
        link="https://github.com/billearly/homepage-notes"
        linkText="GitHub"
      />
    </div>
  </>
