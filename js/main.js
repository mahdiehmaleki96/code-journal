'use strict';
const form = document.getElementById('journal-form');
const photoUrlInput = document.getElementById('photo-url');
const imagePreview = document.getElementById('image-preview');
const titleInput = document.getElementById('entry-title');
const notesInput = document.getElementById('entry-notes');
const placeholderImage = '../images/placeholder-image-square.jpg';
if (photoUrlInput && imagePreview) {
  photoUrlInput.addEventListener('input', () => {
    const url = photoUrlInput.value;
    imagePreview.src = url ? url : placeholderImage;
  });
}
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (titleInput && photoUrlInput && notesInput) {
      const title = titleInput.value;
      const photoUrl = photoUrlInput.value;
      const notes = notesInput.value;
      const newEntry = {
        entryId: data.nextEntryId++,
        title,
        photoUrl,
        notes,
      };
      data.entries.unshift(newEntry);
      form.reset();
      if (imagePreview) {
        imagePreview.src = placeholderImage;
      }
      saveDataModel(data);
    }
  });
}
