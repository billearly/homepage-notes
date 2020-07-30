import React, { useState, useEffect } from "react";
import { Label } from "./Label";
import { ActionMenu } from "./ActionMenu";
import {
  MenuItem,
  Divider,
  Snackbar
} from "@material-ui/core";
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
  const [timestamp, setTimestamp] = useState(note.updateDate);

  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

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

  const handleNotificationClose = () => {
    setIsNotificationOpen(false);
    setNotificationMessage("");
  }

  const copyToClipboard = (textToCopy: string) =>
    (e: React.MouseEvent) => {
      navigator.clipboard.writeText(textToCopy);

      setNotificationMessage("Copied to clipboard");
      setIsNotificationOpen(true);
    }

  const handleUpdate = (e: React.MouseEvent) => {
    const updateDate = Date.now();

    const updatedNote: NoteModel = {
      id: note.id,
      creationDate: note.creationDate,
      updateDate: updateDate,
      title: title,
      body: body
    };

    const isSuccess = updateNote(id, updatedNote);

    if (isSuccess) {
      setIsSaved(true);
      setTimestamp(updateDate);

      setNotificationMessage("Note saved successfully");
      setIsNotificationOpen(true);
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
    <>
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
          timestamp={timestamp}
        />

        <ActionMenu>
          <MenuItem onClick={copyToClipboard(title)}>Copy Title</MenuItem>
          <Divider />
          <MenuItem onClick={copyToClipboard(body)}>Copy Body</MenuItem>
          <Divider />
          <MenuItem onClick={handleDelete}>Delete</MenuItem>
        </ActionMenu>

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

      <Snackbar
        open={isNotificationOpen}
        message={notificationMessage}
        onClose={handleNotificationClose}
        autoHideDuration={5000}
        anchorOrigin={{
          horizontal: "left",
          vertical: "bottom"
        }}
      />
    </>
  );
};
