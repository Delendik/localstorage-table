import '../blocks/Table.css';
import NewRow from './NewRow';
import { useState } from 'react';

function Table() {
  const [field, setField] = useState('')
  const [toggleSort, setToggleSort] = useState(true);
  const [currentRow, setCurrentRow] = useState(null);

  var data = [];
  for(let i=0; i<localStorage.length; i++) {
    let key = localStorage.key(i);
    data.push(JSON.parse(localStorage.getItem(key)));
  }

  const handleClickName = () => {
    setField('name');
    setToggleSort(!toggleSort)
  };

  const handleClickType = () => {
    setField('type');
    setToggleSort(!toggleSort)
  };

  const handleClickColor = () => {
    setField('color');
    setToggleSort(!toggleSort)
  };

  function sortByField(field) {
    if(toggleSort){
      return (a, b) => a[field] > b[field] ? 1 : -1;
    }
    return (a, b) => a[field] > b[field] ? -1 : 1;
  };

  data.sort(sortByField(field));
  let dataForDisplay=data.reverse();

  function dragStartHandler(e, data) {
    setCurrentRow(data)
  }

  function dragLeavetHandler(e) {
    e.target.style.background = 'lightblue'
  }

  function dragOverHandler(e) {
    e.preventDefault();
    e.target.style.background = '#4895ad'
  }

  function dropHandler(e, data) {
    e.preventDefault();
    e.target.style.background = 'lightblue'
    if(currentRow.id!==data.id){
      let tempRowTo = Object.assign({}, data);
      let tempRowFrom = Object.assign({}, currentRow);
      data.id = tempRowFrom.id;
      currentRow.id = tempRowTo.id;
      localStorage.setItem(data.id, JSON.stringify(data))
      localStorage.setItem(currentRow.id, JSON.stringify(currentRow))
      window.location.reload();
    }
  }

  return(
    <table className="table">
      <thead>
        <tr>
          <th>Name<button className="table__sort-button" onClick={handleClickName}>sort</button></th>
          <th>Type<button className="table__sort-button" onClick={handleClickType}>sort</button></th>
          <th>Color<button className="table__sort-button" onClick={handleClickColor}>sort</button></th>
          <th>Delete Button</th>
          <th>Change position</th>
        </tr>
      </thead>
      <tbody>
        {
          dataForDisplay.map(data=>
            <NewRow 
              key={`${data.id}`} 
              {...data} 
              draggable={true}
              onDragStart={(e)=> dragStartHandler(e, data)}
              onDragLeave={(e)=> dragLeavetHandler(e)}
              onDragOver={(e)=> dragOverHandler(e)}
              onDrop={(e)=> dropHandler(e, data)}
            />)
        }
      </tbody>
    </table>
  );
};

export default Table;