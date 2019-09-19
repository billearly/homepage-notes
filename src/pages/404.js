import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { GlobalStyle } from "../components";
import FullScreenLayout from "../layouts/FullScreen";

// These should be made into resuable components
const Main = styled.main`
  max-width: 30rem;
  padding: ${props => props.theme.paddingX2};
`;

const Header = styled.header`
  color: white;
  font-family: 'Satisfy', sans-serif;
  font-size: 3rem;
  margin-bottom: ${props => props.theme.paddingX2};
`;

const Message = styled.p`
  color: white;
  margin: ${props => props.theme.paddingX2} 0;
`;

const Link = styled.a`
  color: white;
`;

const Code = styled.div`
  border-top: ${props => props.theme.border};
  color: white;
  font-size: 0.75rem;
  padding-top: ${props => props.theme.paddingX2};
`;

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

      <Main>
        <Header>
          Jot this down...
        </Header>

        <Message>
          Theres nothing here!
        </Message>

        <Message>
          Whatever you were looking for isn't here. You should probably head back to the <Link href="/">homepage</Link>
        </Message>

        <Code>
          <span>404</span>
        </Code>
      </Main>
    </FullScreenLayout>
  )
};
