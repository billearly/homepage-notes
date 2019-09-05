import React from "react";
import { NoteInput } from "./NoteInput";
import { Button, ButtonOutline, ButtonRow } from "../components";
import { useNote } from "../hooks";

export const Note = () => {
  // maybe these go down into the components that need them
  const [
    note,
    updateNote,
    saveNote,
    revertNote,
    isSaved
  ] = useNote();

  const handleKeyPress = e => {
    const ENTER_KEY = 13;

    // Do I actually want this behaviour? Twitter doesn't post on enter
    if (e.which === ENTER_KEY && !e.shiftKey) {
      e.preventDefault();
      saveNote();
    }
  }

  return (
    <>
      <NoteInput
        value={note}
        onChange={updateNote}
        onKeyPress={handleKeyPress}
      />

      {!isSaved &&
        <>
          <ButtonRow>
            <ButtonOutline onClick={revertNote}>Cancel</ButtonOutline>
            <Button onClick={saveNote}>Save</Button>
          </ButtonRow>
        </>
      }
    </>
  );
};
