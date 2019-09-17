import styled from "styled-components";

export const NoteInput = styled.textarea`
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: 0 0.1rem 0.5rem 0.1rem #0000001f;
  color: ${props => props.theme.colorGrayDark};
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
    color: ${props => props.theme.colorGrayDark};;
  }
`;
