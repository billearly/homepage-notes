import styled from "styled-components";

export const Main = styled.main`
  margin: 0 auto;
  padding-top: 10rem;
  width: 20rem;

  @media screen and (max-width: ${props => props.theme.breakpointSmall}) {
    padding: 5rem ${props => props.theme.paddingX2};
    margin: none;
    width: 100%;
  }
`;