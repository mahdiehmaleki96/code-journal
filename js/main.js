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
      const newEntryElement = renderEntry(newEntry);
      const entriesList = document.getElementById('entries-list');
      if (entriesList) {
        entriesList.prepend(newEntryElement);
      }
      toggleNoEntries();
      form.reset();
      if (imagePreview) {
        imagePreview.src = placeholderImage;
      }
      saveDataModel(data);
      viewSwap('entries');
    }
  });
}
function renderEntry(entry) {
  const li = document.createElement('li');
  const img = document.createElement('img');
  img.src = entry.photoUrl;
  img.alt = entry.title;
  const h2 = document.createElement('h2');
  h2.textContent = entry.title;
  const p = document.createElement('p');
  p.textContent = entry.notes;
  li.appendChild(img);
  li.appendChild(h2);
  li.appendChild(p);
  return li;
}
const entriesBtn = document.getElementById('entries-btn');
if (entriesBtn) {
  entriesBtn.addEventListener('click', (event) => {
    event.preventDefault();
    viewSwap('entries');
  });
}
const newEntryBtn = document.getElementById('new-entry-btn');
if (newEntryBtn) {
  newEntryBtn.addEventListener('click', (event) => {
    event.preventDefault();
    viewSwap('entry-form');
  });
}
document.addEventListener('DOMContentLoaded', () => {
  const entriesList = document.getElementById('entries-list');
  if (entriesList) {
    data.entries.forEach((entry) => {
      const entryElement = renderEntry(entry);
      entriesList.appendChild(entryElement);
    });
  }
  viewSwap(data.view);
  toggleNoEntries();
});
function toggleNoEntries() {
  const entriesList = document.getElementById('entries-list');
  const noEntriesText = document.querySelector('.no-entries-text');
  if (entriesList && entriesList.children.length === 0) {
    if (noEntriesText) noEntriesText.classList.remove('hidden');
  } else {
    if (noEntriesText) noEntriesText.classList.add('hidden');
  }
}
function viewSwap(viewName) {
  const entryForm = document.querySelector('[data-view="entry-form"]');
  const entries = document.querySelector('[data-view="entries"]');
  if (viewName === 'entries') {
    entries?.classList.remove('hidden');
    entryForm?.classList.add('hidden');
  } else {
    entryForm?.classList.remove('hidden');
    entries?.classList.add('hidden');
  }
  data.view = viewName;
}
