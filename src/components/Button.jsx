import styled from "styled-components";

export const Button = styled.button`
  background-color: ${props => props.theme.colorBlueDark};
  border: ${props => props.theme.border};
  border-color: ${props => props.theme.colorBlueDark};
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.colorGrayLight};
  cursor: pointer;
  font-weight: bold;
  margin-left: ${props => props.theme.paddingX2};
  padding: ${props => props.theme.padding} ${props => props.theme.paddingX2};
`;

export const ButtonOutline = styled(Button)`
  background-color: transparent;
  color: ${props => props.theme.colorBlueDark};
`;