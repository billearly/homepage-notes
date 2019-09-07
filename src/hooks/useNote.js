import { useState, useEffect } from "react";

export const useNote = () => {
  const STORAGE_KEY = "NOTE";
  const MAX_LENGTH = 150;

  const [inBrowser, setInBrowser] = useState(false);
  const [note, setNote] = useState("");
  const [storedNote, setStoredNote] = useState("");
  const [isSaved, setSaved] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  // Initial setup
  useEffect(() => {
    setInBrowser(true);

    const storedValue = localStorage.getItem(STORAGE_KEY) || "";
    setNote(storedValue);
    setStoredNote(storedValue);
  }, []);

  // Note comparison
  useEffect(() => {
    setSaved(note === storedNote);
  }, [note, storedNote]);

  const updateNote = e => {
    setNote(e.target.value);
  };

  const saveNote = () => {
    if (note.length > MAX_LENGTH) {
      return;
    }

    if (inBrowser) {
      localStorage.setItem(STORAGE_KEY, note);
    }

    setStoredNote(note);
  }

  const revertNote = () => {
    setNote(storedNote);
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
