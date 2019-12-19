import { getNote, updateNote } from "../localStorage";

const STORAGE_KEY = "NOTE";

describe("Local Storage", () => {
  describe("Get Note", () => {
    beforeEach(() => {
      window.localStorage.clear();
    });

    test("Should return a default note if none is found in local storage", () => {
      const note = getNote();

      expect(note.title).toBe("");
      expect(note.body).toBe("");
    });

    test("Should return return a note with empty title if stored value cant be parsed (v1 storage model)", () => {
      window.localStorage.setItem(STORAGE_KEY, "this is my note");

      const note = getNote();

      expect(note.title).toBe("");
      expect(note.body).toBe("this is my note");
    });

    test("Should return a note if stored value can be parsed", () => {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ title: "My Title", body: "this is the body" }));

      const note = getNote();

      expect(note.title).toBe("My Title");
      expect(note.body).toBe("this is the body");
    });
  });

  describe("Save Note", () => {
    beforeEach(() => {
      window.localStorage.clear();
    });

    test("Should write a note to local storage", () => {
      updateNote({
        title: "My Title",
        body: "this is the body"
      });

      const storedValue = window.localStorage.getItem(STORAGE_KEY);

      expect(storedValue).toBe("{\"title\":\"My Title\",\"body\":\"this is the body\"}");
    });
  });
});
