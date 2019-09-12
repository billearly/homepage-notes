import styled from "styled-components";

export const Main = styled.main`
  background-color: ${props => props.theme.colorGrayLight};
  color: ${props => props.theme.colorGrayDark};
  height: 100%;
  min-height: 100vh;
  position: relative;
`;
