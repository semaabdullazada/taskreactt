import { useState } from 'react';
import "./First.css";
function First() {
    const [number, setNumber] = useState(0);
    const takeNumber = () => {
     setNumber(Math.random());
  }

  return (
    <div className="App">
      <button onClick={takeNumber}>Click!!</button>

        <p >{number} </p>
    </div>
  );
}

export default First;