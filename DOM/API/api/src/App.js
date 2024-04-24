import { useState, useEffect } from "react";
import Content from "./Content"
import Navbar from "./Navbar";
function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMemo, setIsMemo] = useState(false)

  return (
    <div className="App">
      <button onClick={() => setIsOpen(!isOpen)}>Open API</button>
      <button onClick={() => setIsMemo(!isMemo)}>Open Navbar</button>
      {isMemo && <Navbar />}
      {isOpen && <Content />}
    </div>
  );
}

export default App;
