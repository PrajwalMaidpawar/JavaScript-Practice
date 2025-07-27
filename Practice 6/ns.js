const noteInput = document.getElementById("noteInput");
const addNoteBtn = document.getElementById("addNoteBtn");
const showNotesBtn = document.getElementById("showNotesBtn");
const deleteAllBtn = document.getElementById("deleteAllBtn");
const notesContainer = document.getElementById("notesContainer");

function getNotes() {
  return JSON.parse(localStorage.getItem("notes")) || [];
}

function saveNotes(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function renderNotes() {
  const notes = getNotes();
  notesContainer.innerHTML = "";

  if (notes.length === 0) {
    notesContainer.innerHTML = "<p style='text-align:center;'>No notes found.</p>";
    return;
  }

  notes.forEach((note, index) => {
    const noteDiv = document.createElement("div");
    noteDiv.className = "note";
    noteDiv.innerText = note;
    notesContainer.appendChild(noteDiv);
  });
}

addNoteBtn.addEventListener("click", () => {
  const note = noteInput.value.trim();
  if (note === "") {
    alert("Please enter a note.");
    return;
  }

  const notes = getNotes();
  notes.push(note);
  saveNotes(notes);

  noteInput.value = "";
  renderNotes();
});

showNotesBtn.addEventListener("click", () => {
  renderNotes();
});

deleteAllBtn.addEventListener("click", () => {
  const confirmDelete = confirm("Are you sure you want to delete all notes?");
  if (confirmDelete) {
    localStorage.removeItem("notes");
    renderNotes();
  }
});

// Optional: Load notes automatically on page load
window.onload = renderNotes;
