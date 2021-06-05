import '../blocks/NewRow.css';
import { useState } from 'react';

function NewRow({id, name, type, color, draggable, onDragStart, onDragLeave, onDragOver, onDrop}) {
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
    color = color.slice(4, -1).split(",")
    newColor = rgbToHex (Number(color[0]), Number(color[1]), Number(color[2]))
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
    let data = localStorage.getItem(id);
    if (data != null) {
      let row= JSON.parse(data);
      row.type = e.target.value;
      window.localStorage.setItem(id, JSON.stringify(row));
    } 
  }

  function changeColor(e) {
    setCurrentColor(e.target.value);
    let data = localStorage.getItem(id);
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
    <tr 
      className="cell__container" 
      draggable={draggable}
      onDragStart={onDragStart}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <td><input className="cell" type="text" onChange={changeName} value={currentName}></input></td>
      <td><input className="cell" type="text" onChange={changeType} value={currentType}></input></td>
      <td><input className="cell" type="color" onChange={changeColor} value={currentColor}></input></td>
      <td ><button className="cell cell__button" onClick={deleteRow}>Delete</button></td>
      <td><p className="cell">Change my position</p></td>
    </tr>
  )
  
}

export default NewRow;