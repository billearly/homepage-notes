import { useState } from "react";

const STORAGE_KEY = "NOTE";

export const useNote = () => {
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

export const useEditing = () => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  }

  return [
    isEditing,
    toggleEditing
  ]
}