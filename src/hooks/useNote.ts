import React, { useState, useEffect } from "react";
import { getNote, saveNote } from "../persistence/localStorage";

interface NoteState {
  body: string;
  title: string;
  updateBody: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  updateTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  saveBody: () => void;
  saveTitle: () => void;
  revertBody: () => void;
  isSaved: boolean;
  isEditing: boolean;
  setIsEditing: (isEditing: boolean) => void;
  maxLength: number;
}

export const useNote = () => {
  const maxLength = Number(process.env.GATSBY_MAX_LENGTH || 250);

  const [inBrowser, setInBrowser] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [storedBody, setStoredBody] = useState("");
  const [isSaved, setSaved] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  // Initial setup
  useEffect(() => {
    setInBrowser(true);

    const initialState = getNote();

    setTitle(initialState.title);
    setBody(initialState.body);
    setStoredBody(initialState.body);
  }, []);

  // Body comparison
  useEffect(() => {
    setSaved(body === storedBody);
  }, [body, storedBody]);

  const updateBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  const updateTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  const saveBody = () => {
    if (body.length > maxLength) {
      return;
    }

    if (inBrowser) {
      saveNote({ title, body });
    }

    setStoredBody(body);
  }

  const saveTitle = () => {
    if (inBrowser) {
      // When we save the title, don't also update the body in case its over the limit
      saveNote({ title, body: storedBody });
    }
  }

  const revertBody = () => {
    setBody(storedBody);
  }

  const state: NoteState = {
    body,
    title,
    updateBody,
    updateTitle,
    saveBody,
    saveTitle,
    revertBody,
    isSaved,
    isEditing,
    setIsEditing,
    maxLength
  };

  return state;
};
