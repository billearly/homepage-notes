import React, { useState, useEffect } from "react";
import {
  Button,
  ButtonType,
  ButtonRow,
  NoteTitle,
  NoteInput,
  Label,
  Status
} from "./";
import { useNote } from "../hooks";

export const Note = ({
  titleLabel,
  inputLabel
}) => {
  // Refactor this into an object
  // Thinking that I don't really need the hook since the logic isn't shared
  // But it is nice that its in a separate file
  const [
    body,
    title,
    updateBody,
    updateTitle,
    saveBody,
    saveTitle,
    revertBody,
    isSaved,
    isEditing,
    setIsEditing
  ] = useNote();

  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    setIsDisplayed(true);
  }, []);

  const handleFocus = () => {
    setIsEditing(true);
  }

  const handleBlur = () => {
    setIsEditing(false);
  }

  const getFillPercentage = () => {
    return body.length / process.env.GATSBY_MAX_LENGTH * 100;
  }

  return (
    <>
      {/* These ids need an index when there are multiple notes */}
      <Label htmlFor="title-input">
        {titleLabel}
      </Label>

      <NoteTitle
        id="title-input"
        placeholder="Add a title..."
        value={title}
        onChange={updateTitle}
        onBlur={saveTitle}
        isDisplayed={isDisplayed}
      />

      <Label htmlFor="note-input">
        {inputLabel}
      </Label>

      <NoteInput
        id="note-input"
        value={body}
        onChange={updateBody}
        onFocus={handleFocus}
        onBlur={handleBlur}
        isDisplayed={isDisplayed}
      />

      {(!isSaved || isEditing) &&
        <>
          <Status percentage={getFillPercentage()} />

          <ButtonRow>
            <Button
              type={ButtonType.Outline}
              onClick={revertBody}
            >
              Cancel
            </Button>

            <Button
              onClick={saveBody}
            >
              Save
            </Button>
          </ButtonRow>
        </>
      }
    </>
  );
};
