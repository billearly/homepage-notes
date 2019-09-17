import styled from "styled-components";

export const ContentWarning = styled.p`
  border: ${props => props.theme.border};
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.colorRed};
  padding: ${props => props.theme.padding};
`;
