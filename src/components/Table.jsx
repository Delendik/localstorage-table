import { useState, useEffect } from 'react';
import '../blocks/Table.css';
import NewRow from './NewRow';

function Table({active, currentPage, openRow}) {
  // const [data, setData] = useState([]);
  // const [field, setField] = useState('')
  // const [toggleSort, setToggleSort] = useState(true);

  // function sortByField(field) {
  //   if(toggleSort){
  //     return (a, b) => a[field] > b[field] ? 1 : -1;
  //   }
  //   return (a, b) => a[field] > b[field] ? -1 : 1;
  // };

  var data = [];
  // useEffect(()=>{
  //   for(let i=0; i<localStorage.length; i++) {
  //     let key = localStorage.key(i);
  //     data.push(JSON.parse(localStorage.getItem(key)));
  //   }
  // }, [])
  // console.log(data)
  for(let i=0; i<localStorage.length; i++) {
    let key = localStorage.key(i);
    data.push(JSON.parse(localStorage.getItem(key)));
  }

  return(
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Color</th>
          <th>Delete Button</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map(data=><NewRow key={`${data.id}`} {...data} />)
        }
      </tbody>
    </table>
  );
};

export default Table;