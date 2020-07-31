import React, { useState, useEffect } from "react";
import classnames from "classnames";
import { cloneDeep } from "lodash";
import { Note } from "./Note";
import { CreateNoteButton } from "./CreateNoteButton";
import { NoNotes } from "./NoNotes";
import { Notes } from "../../models";
import {
  getNotes,
  createNote,
  deleteNote
} from "../../persistence/localStorage";
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
        handleNoteDeletion={handleNoteDeletion}
      />
    );

  const handleNoteDeletion = (id: string) => {
    const isSuccessful = deleteNote(id);

    if (!isSuccessful) {
      // Show an error
    }

    const updatedNotes: Notes = cloneDeep(notes);
    delete updatedNotes[id];

    setNotes(updatedNotes);
  }

  const handleNoteCreation = () => {
    const newNote = createNote();

    if (!newNote) {
      // Show an error
    }

    const updatedNotes: Notes = cloneDeep(notes);
    updatedNotes[newNote.id] = newNote;

    setNotes(updatedNotes);
  }

  const getNotesSection = () => {
    return (
      <>
        {generateNotes(notes)}

        <CreateNoteButton onClick={handleNoteCreation}>
          +
        </CreateNoteButton>
      </>
    );
  }

  return (
    <div className={classes}>
      {Object.keys(notes).length > 0
        ? getNotesSection()
        : <NoNotes handleCreateNote={handleNoteCreation} />
      }
    </div>
  );
};
