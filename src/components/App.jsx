import '../blocks/App.css';
import data from '../data/data';
import Table from './Table';
import AddRow from './AddRow';

function App() {
  let chackData = localStorage.length;
  
  function storageAvailable(type) {
    try {
      var storage = window[type],
        x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    }
    catch(e) {
      return false;
    }
  }

  if (!storageAvailable('localStorage')) {
    if (chackData === 0) {
      data.forEach(item=> localStorage.setItem(item.id, JSON.stringify(item)));
    };
  }

  return (
    <div>
      <AddRow />
      <Table />
    </div>
  );
}

export default App;
