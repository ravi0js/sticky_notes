
const mainContainer = document.querySelector(".main_container");
const addNoteButton = document.querySelector("#addNoteButton");
const notesContainer = document.querySelector(".notes_container");

addNoteButton.addEventListener("click", () => {
    const noteEditor = document.createElement("div");
    noteEditor.className = "note_editor";
    noteEditor.innerHTML = `
        <textarea class="note_text" cols="30" rows="8"></textarea>
    <label for="note_color">Background color</label><input type="color" class="note_color">
    <label for="text_color">Font color</label>
    <input type="color" class="text_color">
        <div class="editor_buttons">
            <button class="save_note">Save</button>
            <button class="close_editor">Close</button>
        </div>
    `;
    mainContainer.appendChild(noteEditor);

    const noteText = noteEditor.querySelector(".note_text");
    const textColor=noteEditor.querySelector(".text_color");
    const noteColor = noteEditor.querySelector(".note_color");
    const saveButton = noteEditor.querySelector(".save_note");
    const closeButton = noteEditor.querySelector(".close_editor");

    saveButton.addEventListener("click", () => {
        const note = document.createElement("div");
        note.className = "note";
        note.style.backgroundColor = noteColor.value;
        note.style.color=textColor.value;
        note.innerHTML = `
            <p class="note_content">${noteText.value}</p>
            <button class="delete_note">X</button>
        `;
        notesContainer.appendChild(note);

        const deleteButton = note.querySelector(".delete_note");
        deleteButton.addEventListener("click", () => {
            notesContainer.removeChild(note);
        });
        

        noteText.value = "";
        noteColor.value = "#000000";
        mainContainer.removeChild(noteEditor);
    });

    closeButton.addEventListener("click", () => {
        mainContainer.removeChild(noteEditor);
    });
    // movable Div 

});