import React from "react";
import {
  Button,
  ButtonOutline,
  ButtonRow,
  NoteInput,
  Status
} from "./";
import { useNote } from "../hooks";

export const Note = () => {
  // Refactor this into an object
  const [
    note,
    updateNote,
    saveNote,
    revertNote,
    isSaved,
    MAX_LENGTH,
    isEditing,
    setIsEditing
  ] = useNote();

  const handleFocus = () => {
    setIsEditing(true);
  }

  const handleBlur = () => {
    setIsEditing(false);
  }

  const getFillPercentage = () => {
    return note.length / MAX_LENGTH * 100;
  }

  return (
    <>
      <NoteInput
        value={note}
        onChange={updateNote}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Write a note to yourself..."
      />

      {(!isSaved || isEditing) &&
        <>
          <Status percentage={getFillPercentage()} />

          <ButtonRow>
            <ButtonOutline onClick={revertNote}>Cancel</ButtonOutline>
            <Button onClick={saveNote}>Save</Button>
          </ButtonRow>
        </>
      }
    </>
  );
};
