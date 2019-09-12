import styled from "styled-components";

export const Main = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 10rem;
  width: 20rem;

  @media screen and (max-width: ${props => props.theme.breakpointSmall}){
    padding-top: 0;
  }
`;