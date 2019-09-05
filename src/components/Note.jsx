import React from "react";
import { NoteDisplay } from "./NoteDisplay";
import { NoteInput } from "./NoteInput";
import { Button, ButtonOutline, ButtonRow } from "../components";
import { useNote, useEditing } from "../hooks";

export const Note = () => {
  // maybe these go down into the components that need them
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
      {isEditing ? (
        <>
          <NoteInput
            value={note}
            onChange={updateNote}
            onKeyPress={handleKeyPress}
          />

          <ButtonRow>
            <ButtonOutline onClick={handleCancel}>Cancel</ButtonOutline>
            <Button onClick={handleSave}>Save</Button>
          </ButtonRow>
        </>
      ) : (
          <NoteDisplay
            onClick={toggleEditing}
          >{note}</NoteDisplay>
        )
      }
    </>
  );
};
