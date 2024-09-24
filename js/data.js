'use strict';
let data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
};
function saveDataModel(dataModel) {
  localStorage.setItem('dataModel', JSON.stringify(dataModel));
}
function loadDataModel() {
  const loadData = localStorage.getItem('dataModel');
  return loadData ? JSON.parse(loadData) : data;
}
data = loadDataModel();
