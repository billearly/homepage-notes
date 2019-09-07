import styled from "styled-components";

export const NoteInput = styled.textarea`
  background-color: #a5daf2;
  border: 0.1rem solid transparent;
  border-radius: 0.2rem;
  color: white;
  display: block;
  font-family: Arial, sans-serif;
  font-size: 1rem;
  height: 12rem;
  padding: 0.75rem;
  resize: none;
  width: 100%;

  &:focus {
    border: 0.1rem solid white;
    outline: none;
  }
`;
