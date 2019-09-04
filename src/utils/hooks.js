import { useState } from "react";

export const useNote = () => {
  const [note, setNote] = useState("");

  const updateNote = e => {
    setNote(e.target.value);
  };

  // have something for onSubmit that writes to local storage

  return [
    note,
    updateNote,
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