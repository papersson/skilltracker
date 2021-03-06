import "./App.css";
import Item from "./components/Item.js";
import CreateItem from "./components/CreateItem.js";
import { useState, useEffect } from "react";
import noteService from "./services/item.js";

let fatigue;
function App() {
  const [items, setItems] = useState([]);
  const [createItem, setCreateItem] = useState(false);

  const loadData = () => {
    noteService.getAll().then((initialItems) => setItems(initialItems));
  };
  useEffect(() => loadData(), []);


  const [fatigue, setFatigue] = useState()
  const loadFatigue = () => {
    noteService.getFatigue().then((fatigue) => setFatigue(fatigue));
  };
  useEffect(() => loadFatigue(), []);

  return (
    <main className="content">
      <h1 className="title">Progress tracker</h1>
      {items.map((item, index) => (
        <Item
          key={index}
          id={item.id}
          name={item.name}
          width={item.width}
          progress={item.progress}
          target={item.target}
          items={items}
          setItems={setItems}
          fatigue={fatigue}
          setFatigue={setFatigue}
        />
      ))}
      {createItem && (
        <CreateItem
          createItem={createItem}
          setCreateItem={setCreateItem}
          items={items}
          setItems={setItems}
        />
      )}

      <div>
        <svg class="svg-icon" viewBox="0 0 20 20" onClick={() => setCreateItem(true)}>
          <path
            fill="none"
            d="M13.388,9.624h-3.011v-3.01c0-0.208-0.168-0.377-0.376-0.377S9.624,6.405,9.624,6.613v3.01H6.613c-0.208,0-0.376,0.168-0.376,0.376s0.168,0.376,0.376,0.376h3.011v3.01c0,0.208,0.168,0.378,0.376,0.378s0.376-0.17,0.376-0.378v-3.01h3.011c0.207,0,0.377-0.168,0.377-0.376S13.595,9.624,13.388,9.624z M10,1.344c-4.781,0-8.656,3.875-8.656,8.656c0,4.781,3.875,8.656,8.656,8.656c4.781,0,8.656-3.875,8.656-8.656C18.656,5.219,14.781,1.344,10,1.344z M10,17.903c-4.365,0-7.904-3.538-7.904-7.903S5.635,2.096,10,2.096S17.903,5.635,17.903,10S14.365,17.903,10,17.903z"
          ></path>
        </svg>
      </div>
    </main>
  );
}

export default App;
