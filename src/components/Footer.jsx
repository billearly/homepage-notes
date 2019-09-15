import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: ${props => props.theme.colorBlueDark};
  bottom: 0;
  color: white;
  font-size: 0.75rem;
  position: absolute;
  width: 100%;

  a {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const FooterItems = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 20rem;
  padding: ${props => props.theme.padding} ${props => props.theme.paddingX2};

  @media screen and (max-width: ${props => props.theme.breakpointSmall}) {
    margin: none;
    max-width: none;
  }
`;

export const Footer = ({ link, linkText }) => {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <FooterContainer>
      <FooterItems>
        <span>© {year}</span>
        <a href={link}>{linkText}</a>
      </FooterItems>
    </FooterContainer>
  )
};
