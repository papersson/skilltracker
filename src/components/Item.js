import ProgressBar from "./ProgressBar.js";
import {useState} from 'react'

let end;
let start;
function Item({ name='JavaScript', width=400, progress, target }) {
  const [toggleText, setToggleText] = useState('Start')
  const props = {width: width, progress: progress, target: target };

  const track = () => {
    if (toggleText == 'Start') {
      setToggleText('Stop')
      start = Date.now();
    } else {
      setToggleText('Start')
      end = Date.now();
      const duration = end - start;
      console.log(duration);
    }
  }

  return (
    <section className="item">
      <h3>{name}</h3>
      <div className="item-content">
        <button className="toggle" onClick={e => track(e)}>{toggleText}</button>
        <ProgressBar {...props} />
        <button className="edit">Edit</button>
      </div>
    </section>
  );
}

export default Item;


