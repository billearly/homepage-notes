import React from "react";
import {
  GlobalStyle,
  NoteInput,
  NoteDisplay,
  Main
} from "../components";
import { useNote, useEditing } from "../utils";

export default () => {
  const [note, updateNote, saveNote] = useNote();
  const [isEditing, toggleEditing] = useEditing();

  const handleSubmit = () => {
    saveNote();
    toggleEditing();
  }

  return (
    <>
      <GlobalStyle />

      <Main>
        <div>
          <h1>Homepage Notes</h1>

          {isEditing ? (
            <NoteInput
              value={note}
              onChange={updateNote}
            />
          ) : (
              <NoteDisplay>{note}</NoteDisplay>
            )
          }
        </div>
        <button onClick={handleSubmit}>Save</button>
      </Main>
    </>
  );
};
