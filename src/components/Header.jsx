import React from "react";
import styled from "styled-components";
import { InfoButton } from "./";

const HeaderBar = styled.header`
  background-color: ${props => props.theme.colorBlueDark};
  color: white;
  font-family: 'Satisfy', cursive;

  p {
    font-size: 2rem;
  }
`;

const HeaderContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 20rem;
  padding: ${props => props.theme.padding} ${props => props.theme.paddingX2};

  @media screen and (max-width: ${props => props.theme.breakpointSmall}) {
    margin: none;
    max-width: none;
  }
`;

export const Header = ({
  name,
  infoHeader,
  contentList
}) =>
  <HeaderBar>
    <HeaderContent>
      <p>{name}</p>

      <InfoButton
        infoHeader={infoHeader}
        contentList={contentList}
      />
    </HeaderContent>
  </HeaderBar>
