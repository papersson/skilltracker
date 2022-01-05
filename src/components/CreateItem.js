import { useState } from "react";
import Item from "./Item.js";

function CreateItem({ createItem, setCreateItem, items, setItems }) {
  const [topicInput, setTopicInput] = useState("");
  const [targetInput, setTargetInput] = useState("");

  const addItem = (topic, target) => {
    const newItem = {
      name: topic,
      width: 500,
      progress: 0,
      target: target,
      id: items.length + 1,
    };
    setItems(items.concat(newItem));
    setCreateItem(false);
  };

  return (
    <section className="create-item item">
      <input
        autoFocus
        type="text"
        placeholder="Topic"
        value={topicInput}
        onChange={(e) => setTopicInput(e.target.value)}
      />
      <input
        type="number"
        placeholder="Target (hours)"
        value={targetInput}
        onChange={(e) => setTargetInput(e.target.value)}
      />
      <div className="create-item-container">
        <button
          className="create-item-button add-button"
          onClick={() => addItem(topicInput, targetInput)}
          disabled={!topicInput || !targetInput}
        >
          Add
        </button>
        <button
          className="create-item-button cancel-button"
          onClick={() => setCreateItem(!createItem)}
        >
          Cancel
        </button>
      </div>
    </section>
  );
}

export default CreateItem;
