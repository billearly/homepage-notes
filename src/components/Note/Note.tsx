import React, { useState, useEffect } from "react";
import { Label } from "./Label";
import { Trash } from "react-feather";
import { IconButton } from "../";
import { Note as NoteModel } from "../../models";
import { NoteTitle } from "./NoteTitle"
import { NoteInput } from "./NoteInput";
import { NoteTimestamp } from "./NoteTimestamp";
import {
  Button,
  ButtonRow,
  ButtonType,
  Status
} from "../";
import { updateNote } from "../../persistence/localStorage";
import "./Note.scss";

interface INoteProps {
  id: string;
  note: NoteModel;
  titleLabel: string;
  inputLabel: string;
  handleNoteDeletion: (id: string) => void;
}

export const Note: React.FC<INoteProps> = ({
  id,
  note,
  titleLabel,
  inputLabel,
  handleNoteDeletion
}) => {
  const maxLength = Number(process.env.GATSBY_MAX_LENGTH || 250);

  const [isSaved, setIsSaved] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const [title, setTitle] = useState(note.title);
  const [body, setBody] = useState(note.body);

  useEffect(() => {
    setIsSaved(title === note.title && body === note.body);
  }, [title, body]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  const handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  }

  const handleDelete = (e: React.MouseEvent) => {
    handleNoteDeletion(id);
  }

  const handleUpdate = (e: React.MouseEvent) => {
    const updatedNote: NoteModel = {
      id: note.id,
      creationDate: note.creationDate,
      title: title,
      body: body
    };

    const isSuccess = updateNote(id, updatedNote);

    if (isSuccess) {
      setIsSaved(true);
    } else {
      // revert and log error
    }
  }

  const handleFocus = () => {
    setIsEditing(true);
  }

  const handleBlur = () => {
    setIsEditing(false);
  }

  const discardChanges = () => {
    setTitle(note.title);
    setBody(note.body);
    setIsEditing(false);
  }

  const getFillPercentage = (): number => {
    return body.length / maxLength * 100;
  }

  return (
    <div className="note">
      {/* These ids need an index when there are multiple notes */}
      <Label htmlFor="title-input">
        {titleLabel}
      </Label>

      <NoteTitle
        id="title-input"
        placeholder="Add a title..."
        value={title}
        onChange={handleTitleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

      <Label htmlFor="note-input">
        {inputLabel}
      </Label>

      <div className="note__input-wrapper">
        <NoteInput
          id="note-input"
          value={body}
          onChange={handleBodyChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        {(!isSaved || isEditing) &&
          <Status percentage={getFillPercentage()} />
        }
      </div>

      <NoteTimestamp
        timestamp={note.creationDate}
      />

      <IconButton
        className="delete-button"
        onClick={handleDelete}
      >
        <Trash />
      </IconButton>

      {(!isSaved || isEditing) &&
        <>
          <ButtonRow>
            <Button
              type={ButtonType.Outline}
              onClick={discardChanges}
            >
              Cancel
            </Button>

            <Button
              onClick={handleUpdate}
            >
              Save
            </Button>
          </ButtonRow>
        </>
      }
    </div>
  );
};
