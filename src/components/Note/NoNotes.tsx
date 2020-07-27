import React from "react";
import { FileText } from "react-feather";
import "./NoNotes.scss";


interface INoNotesProps {
  handleCreateNote: (e: React.MouseEvent) => void
}

export const NoNotes: React.FC<INoNotesProps> = ({ handleCreateNote }) => {
  return (
    <div className="no-notes">
      <FileText />
      <p>You don't have any notes</p>
      <button onClick={handleCreateNote}>Add a note</button>
    </div>
  );
}
