import { useState, useEffect } from "react";

export const useNote = () => {
  const STORAGE_KEY = "NOTE";
  const MAX_LENGTH = 150;

  const [inBrowser, setInBrowser] = useState(false);
  const [note, setNote] = useState("");
  const [isSaved, setSaved] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setInBrowser(true);
    setNote(localStorage.getItem(STORAGE_KEY) || "");
  }, []);

  const updateNote = e => {
    setNote(e.target.value);

    // check if current note is equal to saved note
    // that way if someone types in the same thing they won't need to save again
    setSaved(false);
  };

  const saveNote = () => {
    if (note.length > MAX_LENGTH) {
      return;
    }

    if (inBrowser) {
      localStorage.setItem(STORAGE_KEY, note);
    }

    setSaved(true);
  }

  const revertNote = () => {
    let storedNote = "";

    if (inBrowser) {
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
