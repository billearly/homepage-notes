import React, { ChangeEvent } from "react";
import "./NoteInput.scss";

interface INoteInputProps {
  id: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onFocus: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const NoteInput: React.FC<INoteInputProps> = ({
  id,
  value,
  onChange,
  onFocus,
  onBlur
}) => {
  return (
    <textarea
      id={id}
      className="noteinput"
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};
