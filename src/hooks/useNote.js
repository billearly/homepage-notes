import { useState, useEffect } from "react";
import { getNote, saveNote } from "../persistence/localStorage";

export const useNote = () => {
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

  const updateBody = e => {
    setBody(e.target.value);
  };

  const updateTitle = e => {
    setTitle(e.target.value);
  }

  const saveBody = () => {
    if (body.length > process.env.GATSBY_MAX_LENGTH) {
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

  return [
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
  ];
};
