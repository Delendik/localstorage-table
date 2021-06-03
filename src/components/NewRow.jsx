import '../blocks/NewRow.css';
import { useState } from 'react';

function NewRow({id, name, type, color}) {
  const [currentName, setCurrentName] = useState(name);
  const [currentType, setCurrentType] = useState(type);
  const [currentColor, setCurrentColor] = useState(color);

  function changeName(e) {
    setCurrentName(e.target.value);
    let data = localStorage.getItem(id)
    if (data != null) {
      let row= JSON.parse(data);
      row.name = e.target.value;
      window.localStorage.setItem(id, JSON.stringify(row));
    } 
  }

  function changeType(e) {
    setCurrentType(e.target.value);
    let data = localStorage.getItem(id)
    if (data != null) {
      let row= JSON.parse(data);
      row.type = e.target.value;
      window.localStorage.setItem(id, JSON.stringify(row));
    } 
  }

  function changeColor(e) {
    setCurrentColor(e.target.value);
    let data = localStorage.getItem(id)
    if (data != null) {
      let row= JSON.parse(data);
      row.color = e.target.value;
      window.localStorage.setItem(id, JSON.stringify(row));
    } 
  }

  function deleteRow(){
    window.localStorage.removeItem(id);
    window.location.reload();
  }
  
  return(
    <tr>
      <td><input className="cell" type="text" onChange={changeName} value={currentName}></input></td>
      <td><input className="cell" type="text" onChange={changeType} value={currentType}></input></td>
      <td><input className="cell" type="color" onChange={changeColor} value={currentColor}></input></td>
      <td className="cell"><button className="cell__button" onClick={deleteRow}>Delete</button></td>
    </tr>
  )
  
}

export default NewRow;