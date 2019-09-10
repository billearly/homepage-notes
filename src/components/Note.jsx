import React, { useState, useEffect } from "react";
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
  // Thinking that I don't really need the hook since the logic isn't shared
  // But it is nice that its in a separate file
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

  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    setIsDisplayed(true);
  }, []);

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
        isDisplayed={isDisplayed}
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
