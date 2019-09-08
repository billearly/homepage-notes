import styled from "styled-components";

export const Button = styled.button`
  background-color: white;
  border: ${props => props.theme.border};
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.colorBlueLight};
  cursor: pointer;
  font-weight: bold;
  margin-left: ${props => props.theme.paddingX2};
  padding: ${props => props.theme.padding} ${props => props.theme.paddingX2};
`;

export const ButtonOutline = styled(Button)`
  background-color: transparent;
  color: white;
`;