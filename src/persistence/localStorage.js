const STORAGE_KEY = "NOTE";

export const getNote = () => {
  if (localStorage) {
    const storedValue = localStorage.getItem(STORAGE_KEY);

    let note = storedValue
      ? JSON.parse(storedValue)
      : { title: "", body: "" };

    // Backwards compatability for anyone with the old storage object
    if (typeof note === "string") {
      note = {
        title: "",
        body: note
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
