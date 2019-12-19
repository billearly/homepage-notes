import { Note, Notes } from "../models";
import uuidv4 from "uuid/v4";

const NOTE_KEY_PREFIX: string = "NOTE";

export const getNotes = (): Notes => {
  let notes: Notes = {};

  if (localStorage) {
    const allStoredKeys = Object.keys(localStorage);
    const allNoteKeys = allStoredKeys.filter(key => key.startsWith(NOTE_KEY_PREFIX));

    allNoteKeys.forEach(key => {
      const value = localStorage.getItem(key);
      notes[key] = JSON.parse(value);
    });
  }

  return notes;
}

export const updateNote = (id: string, note: Note): boolean => {
  if (localStorage) {
    localStorage.setItem(id, JSON.stringify(note));
    return true;
  }

  return false;
};

// consider renaming this to createNote
export const createNote = (): Note => {
  if (localStorage) {
    const guid: string = uuidv4();
    const id = `${NOTE_KEY_PREFIX}_${guid}`;

    const newNote: Note = {
      id: id,
      creationDate: Date.now(),
      title: "",
      body: ""
    }

    localStorage.setItem(id, JSON.stringify(newNote));
    return newNote;
  }
}
