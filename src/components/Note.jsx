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

  const handleKeyPress = e => {
    const ENTER_KEY = 13;

    // Do I actually want this behaviour? Twitter doesn't post on enter, and neither does facebook
    if (e.which === ENTER_KEY && !e.shiftKey) {
      e.preventDefault();
      saveNote();
    }
  }

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
        onKeyPress={handleKeyPress}
        onFocus={handleFocus}
        onBlur={handleBlur}
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
