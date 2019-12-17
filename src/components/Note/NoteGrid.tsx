import React, { useState, useEffect } from "react";
import classnames from "classnames";
import { Note } from "./Note";
import { Notes } from "../../models";
import { getNotes } from "../../persistence/localStorage";
import "./NoteGrid.scss";

export const NoteGrid: React.FC = () => {
  const initialState: Notes = {};

  const [isDisplayed, setIsDisplayed] = useState(false);
  const [notes, setNotes] = useState(initialState);

  useEffect(() => {
    setIsDisplayed(true);
    setNotes(getNotes());
  }, []);

  const classes = classnames("note-grid", {
    "note-grid--displayed": isDisplayed
  });

  const generateNotes = (notes: Notes): JSX.Element[] =>
    Object.keys(notes).map(noteId =>
      <Note
        key={noteId}
        id={noteId}
        note={notes[noteId]}
        titleLabel="Title Label"
        inputLabel="Input Label"
      />
    );

  return (
    <div className={classes}>
      {generateNotes(notes)}
    </div>
  );
};
