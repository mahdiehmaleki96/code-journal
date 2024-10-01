interface Entry {
  entryId: number;
  title: string;
  photoUrl: string;
  notes: string;
}

interface Data {
  view: 'entries' | 'entry-form';
  entries: Entry[];
  editing: null | Entry;
  nextEntryId: number;
}

let data: Data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
};

function saveDataModel(dataModel: any): void {
  localStorage.setItem('dataModel', JSON.stringify(dataModel));
}

function loadDataModel(): Data {
  const loadData = localStorage.getItem('dataModel');
  return loadData ? JSON.parse(loadData) : data;
}

data = loadDataModel();

console.log(saveDataModel);
