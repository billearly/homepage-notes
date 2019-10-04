import React, { FormEvent, ChangeEvent } from "react";
import classnames from "classnames";
import "./NoteTitle.scss";

interface INoteTitleProps {
  id: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: ChangeEvent<HTMLInputElement>) => void;
  isDisplayed: boolean;
}

export const NoteTitle: React.FC<INoteTitleProps> = ({
  id,
  placeholder,
  value,
  onChange,
  onBlur,
  isDisplayed
}) => {
  const noteTitleClasses = classnames("notetitle", {
    "notetitle--displayed": isDisplayed
  });

  return (
    <div className={noteTitleClasses}>
      <input
        className="notetitle__input"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
}
