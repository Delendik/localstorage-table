import '../blocks/NewRow.css';
import { useState } from 'react';

function NewRow({id, name, type, color}) {
  let newColor = "";
  function rgbToHex (r, g, b){ 
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
    if (r.length === 1) r = '0' + r;
    if (g.length === 1) g = '0' + g;
    if (b.length === 1) b = '0' + b;
    return "#"+(r + g + b).toUpperCase();
  }

  if(color[0]!=="#"){
    newColor = rgbToHex (255, 0, 255);
  }else{
    newColor = color;
  }

  const [currentName, setCurrentName] = useState(name);
  const [currentType, setCurrentType] = useState(type);
  const [currentColor, setCurrentColor] = useState(newColor);

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