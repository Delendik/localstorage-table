import '../blocks/AddRow.css';
import { useState } from 'react';

function AddRow() {
  const [show, setShow] = useState(false)
  const [currentName, setCurrentName] = useState("");
  const [currentType, setCurrentType] = useState("");
  const [currentColor, setCurrentColor] = useState("");

  function findID(arr){
    var random;
    do {
        random = Math.floor(Math.random() * 1000);
        console.log(arr.includes(random))
    } while (arr.includes(random.toString()))
    return random;
  }
  function handleClick() {
    setShow(!show);
    if(show){
      let id = findID(Object.keys(localStorage))
      let row = {};
      row.id = id;
      row.name = currentName;
      row.type = currentType;
      row.color = currentColor;
      window.localStorage.setItem(id, JSON.stringify(row));
      window.location.reload();
    } 
    setCurrentName("");
    setCurrentType("");
    setCurrentColor("#a3e6db");
  }

  function changeName(e) {
    setCurrentName(e.target.value);
  }

  function changeType(e) {
    setCurrentType(e.target.value);
  }

  function changeColor(e) {
    setCurrentColor(e.target.value);
  }

  if(show){
    return(
  
        <form className="add-row" onSubmit={handleClick}>
          <div className="add-row__title">
            <p className="add-row__cell">Input Name</p>
            <p className="add-row__cell">Input Type</p>
            <p className="add-row__cell">Input Color</p>
          </div>
          <div>
            <input className="add-row__cell" type="text" onChange={changeName} value={currentName} placeholder="input name"></input>
            <input className="add-row__cell" type="text" onChange={changeType} value={currentType} placeholder="input type"></input>
            <input className="add-row__cell" type="color" onChange={changeColor} value={currentColor} placeholder="input color"></input>
          </div>
          <button className="add-row__button" onClick={handleClick}>Add</button>
        </form>

    )
  }else{
    return(
      <div className="add-row">
        <button className="add-row__button" onClick={handleClick}>Add Row</button>
      </div>
    )
  }
  
}

export default AddRow;