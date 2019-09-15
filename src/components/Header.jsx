import React from "react";
import styled from "styled-components";

const HeaderBar = styled.header`
  background-color: ${props => props.theme.colorBlueDark};
  color: white;
  font-family: 'Satisfy', cursive;

  p {
    font-size: 2rem;
  }
`;

const HeaderContent = styled.div`
  margin: 0 auto;
  max-width: 20rem;
  padding: ${props => props.theme.padding} ${props => props.theme.paddingX2};

  @media screen and (max-width: ${props => props.theme.breakpointSmall}) {
    margin: none;
    max-width: none;
  }
`;

export const Header = ({ name }) =>
  <HeaderBar>
    <HeaderContent>
      <p>{name}</p>
    </HeaderContent>
  </HeaderBar>