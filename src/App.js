import "./App.css";
import Item from './components/Item.js';
import {useState} from 'react';

let fatigue;
function App() {

  return (
    <main className='content'>
    <h1 className="title">Progress tracker</h1>
    <Item name={'JavaScript'} width={500} progress={240} target={1000}/>
    <Item name={'Python'} width={500} progress={740} target={1000}/>
    </main>
  );
}

export default App;
