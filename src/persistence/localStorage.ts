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

    const newNote: Note = {
      id: guid,
      creationDate: Date.now(),
      title: "",
      body: ""
    }

    let notes = getStoredNotes();
    updateNotes(notes, guid, newNote);

    return newNote;
  }

  // Handle lack of localStorage
}

export const convertNotes = () => {
  if (localStorage) {
    if (localStorage.getItem("NOTES")) {
      // Already exists, no need to convert
      return;
    }

    const notes: Notes = {};

    Object.keys(localStorage)
      .filter(k => k === "NOTE" || k.startsWith("NOTE_"))
      .forEach(key => {
        const oldNote: Note = JSON.parse(localStorage.getItem(key));
        const newGuid = uuidv4();

        notes[newGuid] = {
          id: newGuid,
          creationDate: Date.now(),
          title: oldNote.title,
          body: oldNote.body
        }

        localStorage.removeItem(key);
      });

    localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
  }
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
