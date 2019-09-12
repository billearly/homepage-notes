import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FooterItems = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 20rem;
  padding: ${props => props.theme.padding} 0;
`;

export const FooterContainer = styled.div`
  background-color: ${props => props.theme.colorGrayDark};
  bottom: 0;
  color: ${props => props.theme.colorGrayLight};
  font-size: 0.75rem;
  position: absolute;
  width: 100%;

  a {
    color: ${props => props.theme.colorGrayLight};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
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
