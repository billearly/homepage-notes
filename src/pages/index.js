import React from "react";
import {
  GlobalStyle,
  NoteInput,
  NoteDisplay,
  Main,
  Container,
  Button
} from "../components";
import { useNote, useEditing } from "../hooks";

export default () => {
  const [note, updateNote, saveNote, revertNote] = useNote();
  const [isEditing, toggleEditing] = useEditing();

  const handleSave = () => {
    saveNote();
    toggleEditing();
  }

  const handleCancel = () => {
    revertNote();
    toggleEditing();
  }

  const handleKeyPress = e => {
    const ENTER_KEY = 13;

    if (e.which === ENTER_KEY && !e.shiftKey) {
      saveNote();
      toggleEditing();
    }
  }

  return (
    <>
      <GlobalStyle />

      <Main>
        <Container>
          <h1>Homepage Notes</h1>

          {isEditing ? (
            <div>
              <NoteInput
                value={note}
                onChange={updateNote}
                onKeyPress={handleKeyPress}
              />
              <Button onClick={handleSave}>Save</Button>
              <Button onClick={handleCancel}>Cancel</Button>
            </div>
          ) : (
              <NoteDisplay
                onClick={toggleEditing} // This also needs to give focus, use ref
              >{note}</NoteDisplay>
            )
          }
        </Container>
      </Main>
    </>
  );
};
