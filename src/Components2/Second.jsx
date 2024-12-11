import "./Second.css";
import { useState } from "react";
function Second() {
  const [show, setShow] = useState(true);

    const CloseText = () => {
      setShow(true);
  }
  const ShowText = () => {
    setShow(false);
  }

  return (
    <div className="App">
      <button onClick={ShowText}>Click!!</button>
<div className={show ? "display-none" : ""}>
      <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut ea unde officiis placeat mollitia quos, omnis iusto expedita laboriosam error nam! Odit quaerat corporis consectetur facere veniam odio 
        <button onClick={CloseText}>
          Close
        </button>
      </p>
      </div>
    </div>  
  );
}

export default Second;