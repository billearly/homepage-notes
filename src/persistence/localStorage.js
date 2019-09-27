const STORAGE_KEY = "NOTE";

export const getNote = () => {
  if (localStorage) {
    let note;
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

export const saveNote = (updatedNote) => {
  if (localStorage) {
    const note = JSON.stringify(updatedNote);
    localStorage.setItem(STORAGE_KEY, note);
  }
};
