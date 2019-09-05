import styled from "styled-components";

export const NoteInput = styled.textarea`
  background-color: #a5daf2;
  border: 0.1rem solid white;
  border-radius: 0.2rem;
  color: white;
  display: block;
  font-family: Arial, sans-serif;
  font-size: 1rem;
  height: 12rem;
  overflow: hidden;
  padding: 0.75rem;
  resize: none;
  width: 20rem;

  &:focus {
    outline: none;
  }
`;
