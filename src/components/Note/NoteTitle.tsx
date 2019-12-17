import React, { FormEvent, ChangeEvent } from "react";
import "./NoteTitle.scss";

interface INoteTitleProps {
  id: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const NoteTitle: React.FC<INoteTitleProps> = ({
  id,
  placeholder,
  value,
  onChange,
  onFocus,
  onBlur
}) => {
  return (
    <div>
      <input
        className="notetitle__input"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
}
