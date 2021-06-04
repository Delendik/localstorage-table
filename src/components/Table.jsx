import '../blocks/Table.css';
import NewRow from './NewRow';
import { useState } from 'react';

function Table() {
  const [field, setField] = useState('')
  const [toggleSort, setToggleSort] = useState(true);

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

  return(
    <table className="table">
      <thead>
        <tr>
          <th>Name<button className="table__sort-button" onClick={handleClickName}>sort</button></th>
          <th>Type<button className="table__sort-button" onClick={handleClickType}>sort</button></th>
          <th>Color<button className="table__sort-button" onClick={handleClickColor}>sort</button></th>
          <th>Delete Button</th>
        </tr>
      </thead>
      <tbody>
        {
          dataForDisplay.map(data=><NewRow key={`${data.id}`} {...data} />)
        }
      </tbody>
    </table>
  );
};

export default Table;