import ProgressBar from "./ProgressBar.js";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import noteService from "../services/item.js";

let end;
let start;
function Item({ id, name, width = 400, progress, target, items, setItems, fatigue, setFatigue }) {
  const [toggleText, setToggleText] = useState("Start");
  const props = { width: width, progress: progress, target: target };
  //const [hours, setHours] = useState(0);

  const deleteItem = () => {
    setItems(items.filter((item) => item.id !== id));
    noteService.remove(id);
    let fatigue = noteService.getFatigue()
    console.log(fatigue)
  };

  //const editItem = () => {
  //  // IDK
  //  setTarget(newTarget);
  //  setName(newName);
  //};

  const track = () => {
    if (toggleText === "Start") {
      setToggleText("Stop");
      start = Date.now();
    } else {
      setToggleText("Start");
      end = Date.now();
      const duration = (end - start) / (1000 * 60 * 60);
      const item = items.filter(item => item.id === id)[0]
      const updatedItem = {...item, progress: progress + duration}
      const index = items.findIndex(x => x.id === id)
      const updatedItems = [...items]
      updatedItems[index] = updatedItem
      setItems(updatedItems)
      noteService.update(id, updatedItem)
      noteService.updateFatigue(fatigue + duration)
      setFatigue(fatigue + duration)
      //setHours(hours + duration)
    }
  };

  return (
    <section className="item">
      <div className="upper">
        <h3>{name}</h3>
        <FontAwesomeIcon
          className="trash-icon"
          icon={faTrash}
          onClick={deleteItem}
        />
      </div>
      <div className="item-content">
        <button className="toggle" onClick={(e) => track(e)}>
          {toggleText}
        </button>
        <ProgressBar {...props} />
        <span className="progress">
          {progress.toFixed(1)}/{target}
        </span>
        <button className="edit">Edit</button>
      </div>
    </section>
  );
}

export default Item;
