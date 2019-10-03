const STORAGE_KEY: string = "NOTE";

interface Note {
  title: string;
  body: string;
}

export const getNote = (): Note => {
  if (localStorage) {
    let note: Note;

    const storedValue = localStorage.getItem(STORAGE_KEY);

    if (!storedValue) {
      note = {
        title: "",
        body: ""
      }
    } else {
      try {
        note = JSON.parse(storedValue);
      } catch {
        note = {
          title: "",
          body: storedValue
        }
      }
    }

    return note;
  }
};

export const saveNote = (updatedNote: Note): void => {
  if (localStorage) {
    const note = JSON.stringify(updatedNote);
    localStorage.setItem(STORAGE_KEY, note);
  }
};
