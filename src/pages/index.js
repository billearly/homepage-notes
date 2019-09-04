import React from "react";
import {
  GlobalStyle,
  NoteInput,
  NoteDisplay,
  Main
} from "../components";
import { useNote, useEditing } from "../utils/hooks";

export default () => {
  const [note, updateNote] = useNote();
  const [isEditing, toggleEditing] = useEditing();

  return (
    <>
      <GlobalStyle />

      <Main>
        <div>
          <h1>Homepage Notes</h1>

          {isEditing ?
            <NoteInput
              value={note}
              onChange={updateNote}
            />
            :
            <NoteDisplay>{note}</NoteDisplay>
          }
        </div>
        <button onClick={toggleEditing}>Toggle</button>
      </Main>
    </>
  );
};
