import React, { ChangeEvent } from "react";
import classnames from "classnames";
import "./NoteInput.scss";

interface INoteInputProps {
  value: string
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  onFocus: (e: ChangeEvent<HTMLTextAreaElement>) => void
  onBlur: (e: ChangeEvent<HTMLTextAreaElement>) => void
  isDisplayed: boolean
}

export const NoteInput: React.FC<INoteInputProps> = ({
  value,
  onChange,
  onFocus,
  onBlur,
  isDisplayed
}) => {
  const classes = classnames("noteinput", {
    "noteinput--displayed": isDisplayed
  });

  return (
    <textarea
      className={classes}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};
