import { useState } from "react";

export const useNote = () => {
  const STORAGE_KEY = "NOTE";
  const MAX_LENGTH = 150;
  let initialValue = "";

  if (typeof localStorage !== 'undefined') {
    initialValue = localStorage.getItem(STORAGE_KEY) || "";
  }

  const [note, setNote] = useState(initialValue);
  const [isSaved, setSaved] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const updateNote = e => {
    setNote(e.target.value);

    // check if current note is equal to saved note, that way if someone types in the same thing they won't need to save again
    setSaved(false);
  };

  const saveNote = () => {
    if (note.length > MAX_LENGTH) {
      return;
    }

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, note);
    }

    setSaved(true);
  }

  const revertNote = () => {
    let storedNote = "";

    if (typeof localStorage !== 'undefined') {
      storedNote = localStorage.getItem(STORAGE_KEY) || "";
    }

    setNote(storedNote);
    setSaved(true);
  }

  return [
    note,
    updateNote,
    saveNote,
    revertNote,
    isSaved,
    MAX_LENGTH,
    isEditing,
    setIsEditing
  ];
};
