import { useState } from "react";

export const useNote = () => {
  const STORAGE_KEY = "NOTE";

  const initialValue = localStorage.getItem(STORAGE_KEY);
  const [note, setNote] = useState(initialValue);

  const updateNote = e => {
    setNote(e.target.value);
  };

  const saveNote = () => {
    localStorage.setItem(STORAGE_KEY, note);
  }

  return [
    note,
    updateNote,
    saveNote
  ];
};
