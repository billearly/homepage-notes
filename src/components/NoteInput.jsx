import styled from "styled-components";

export const NoteInput = styled.textarea`
  border: none;
  border-radius: 0.2rem;
  resize: none;
  width: 100%;
  height: 12rem;
  padding: 0.5rem;

  overflow: hidden;
`;

// Need to refresh
// I think that this can be a 'dumb' component and the state will all be in the page
// and I can probably use hooks there
