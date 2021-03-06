import {
  getNotes,
  updateNote,
  createNote,
  deleteNote
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
          updateDate: 0,
          title: "Note 1",
          body: "This is the first note"
        },
        efg456: {
          id: "efg456",
          creationDate: 1,
          updateDate: 0,
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
          updateDate: 0,
          title: "Original Title",
          body: "Original body"
        }
      }

      window.localStorage.setItem(NOTES_KEY, JSON.stringify(storedNotes));

      // Update the note
      const id = "abc123";
      const updateDate = Date.now();

      const note: Note = {
        id: id,
        creationDate: 0,
        updateDate: updateDate,
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
      expect(updatedNote.updateDate).toBe(updateDate);
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

  describe("deleteNote", () => {
    test("Should remove a note with the specified id from local storage", () => {
      const storedNotes: Notes = {
        abc123: {
          id: "abc123",
          creationDate: 0,
          updateDate: 0,
          title: "Title 1",
          body: "Body 1"
        },
        efg456: {
          id: "efg456",
          creationDate: 1,
          updateDate: 1,
          title: "Title 2",
          body: "Body 2"
        }
      }

      window.localStorage.setItem(NOTES_KEY, JSON.stringify(storedNotes));

      const isSuccessful = deleteNote("abc123");
      const updatedValue = window.localStorage.getItem(NOTES_KEY);
      const updatedNotes: Notes = JSON.parse(updatedValue);

      expect(isSuccessful).toBe(true);
      expect(updatedNotes["abc123"]).toBe(undefined);
    });
  });
});
