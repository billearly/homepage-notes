import React from "react";
import "./CreateNoteButton.scss";

interface ICreateNoteButtonProps {
  onClick: () => void;
}

export const CreateNoteButton: React.FC<ICreateNoteButtonProps> = ({
  children,
  onClick
}) => {
  return (
    <button
      className="create-note-button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
