import { Note, Notes } from "../models";
import uuidv4 from "uuid/v4";

const NOTES_KEY = "NOTES";

export const getNotes = (): Notes => {
  if (localStorage) {
    return getStoredNotes();
  }

  return {};
}

export const updateNote = (id: string, note: Note): boolean => {
  if (localStorage) {
    let notes = getStoredNotes();
    updateNotes(notes, id, note);

    return true;
  }

  return false;
};

export const createNote = (): Note => {
  if (localStorage) {
    const guid: string = uuidv4();
    const creationDate = Date.now();

    const newNote: Note = {
      id: guid,
      creationDate: creationDate,
      updateDate: creationDate,
      title: "",
      body: ""
    }

    let notes = getStoredNotes();
    updateNotes(notes, guid, newNote);

    return newNote;
  }

  // Handle lack of localStorage
}

export const deleteNote = (id: string): boolean => {
  if (localStorage) {
    let notes = getStoredNotes();
    delete notes[id];

    localStorage.setItem(NOTES_KEY, JSON.stringify(notes));

    return true;
  }

  return false;
}

const getStoredNotes = (): Notes => {
  let notes: Notes = {};

  const storedNotes = localStorage.getItem(NOTES_KEY) || JSON.stringify({});
  notes = JSON.parse(storedNotes);

  return notes;
}

const updateNotes = (notes: Notes, id: string, note: Note) => {
  notes[id] = note;
  localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
}
