import { useState } from "react";

export const useEditing = () => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  }

  return [
    isEditing,
    toggleEditing
  ]
};
