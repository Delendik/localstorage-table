import '../blocks/App.css';
import data from '../data/data';
import Table from './Table';
import AddRow from './AddRow';

function App() {
  let chackData = localStorage.length;
  
  if (chackData === 0) {
    data.forEach(item=> localStorage.setItem(item.id, JSON.stringify(item)));
  };

  return (
    <div>
      <AddRow />
      <Table />
    </div>
  );
}

export default App;
