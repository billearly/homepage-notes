import {
  getNotes,
  updateNote,
  createNote
} from "../localStorage";
import { Note, Notes } from "../../models";

const NOTES_KEY = "NOTES";

describe("Local Storage", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  describe("getNotes", () => {
    test("Gets notes from localStorage", () => {
      const storedNotes: Notes = {
        abc123: {
          id: "abc123",
          creationDate: 0,
          title: "Note 1",
          body: "This is the first note"
        },
        efg456: {
          id: "efg456",
          creationDate: 1,
          title: "Note 2",
          body: "This is the second note"
        }
      };

      window.localStorage.setItem(NOTES_KEY, JSON.stringify(storedNotes));

      const notes = getNotes();

      const firstNote = notes["abc123"];
      const secondNote = notes["efg456"];

      expect(firstNote.id).toBe("abc123");
      expect(firstNote.title).toBe("Note 1");

      expect(secondNote.id).toBe("efg456");
      expect(secondNote.title).toBe("Note 2");
    });
  });

  describe("updateNote", () => {
    beforeEach(() => {
      window.localStorage.clear();
    });

    test("Should update an existing note in local storage", () => {
      // Store an original note
      const storedNotes: Notes = {
        abc123: {
          id: "abc123",
          creationDate: 0,
          title: "Original Title",
          body: "Original body"
        },
      }

      window.localStorage.setItem(NOTES_KEY, JSON.stringify(storedNotes));

      // Update the note
      const id = "abc123";
      const note: Note = {
        id: id,
        creationDate: 0,
        title: "Updated Title",
        body: "Updated body"
      };

      const isSuccessful = updateNote(id, note);
      const updatedValue = window.localStorage.getItem(NOTES_KEY);
      const updatedNotes: Notes = JSON.parse(updatedValue);
      const updatedNote: Note = updatedNotes[id];

      expect(isSuccessful).toBe(true);
      expect(updatedNote.title).toBe("Updated Title");
      expect(updatedNote.body).toBe("Updated body");
    });
  });

  describe("createNote", () => {
    test("Should add a new empty note to local storage and return it", () => {
      const newNote = createNote();

      const storedValue = window.localStorage.getItem(NOTES_KEY);
      const storedNotes: Notes = JSON.parse(storedValue);
      const storedNote: Note = storedNotes[newNote.id];

      // Default values are correct
      expect(storedNote.title).toBe("");
      expect(storedNote.body).toBe("");

      // Object returned matches object in localStorage
      expect(newNote.id).toBe(storedNote.id);
      expect(newNote.creationDate).toBe(storedNote.creationDate);
      expect(newNote.title).toBe(storedNote.title);
      expect(newNote.body).toBe(storedNote.body);
    });
  });
});
