import { Note, Notes } from "../models";

const NOTE_KEY_PREFIX: string = "NOTE_";

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

export const saveNote = (id: string, note: Note): boolean => {
  if (localStorage) {
    localStorage.setItem(id, JSON.stringify(note));
    return true;
  }

  return false;
};
