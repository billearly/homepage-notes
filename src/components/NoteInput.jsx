import styled from "styled-components";

export const NoteInput = styled.textarea`
  background-color: ${props => props.theme.colorBlueDark};
  border: ${props => props.theme.border};
  border-color: transparent;
  border-radius: ${props => props.theme.borderRadius};
  color: white;
  display: block;
  font-family: Arial, sans-serif;
  font-size: 1rem;
  height: 12rem;
  opacity: ${props => props.isDisplayed ? 1 : 0};
  padding: ${props => props.theme.padding};
  resize: none;
  transition: opacity ${props => props.theme.animationSpeed};
  width: 100%;

  ::placeholder {
    color: #ffffffa6;
  }

  &:focus {
    border: ${props => props.theme.border};
    outline: none;
  }
`;
