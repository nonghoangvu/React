import { useState } from "react";
import Content from "./Content";
function App() {
  const [counter, setCounter] = useState(1)
  const [show, setShow] = useState(false)
  const [valueShow, setValueShow] = useState('Show')
  const handleIncrease = () => {
    setCounter(counter + 2)
  }
  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>

      <button onClick={() => {
        setShow(!show)
        setValueShow(!show ? 'Hidden' : 'Show')
      }
      }>{valueShow}</button>
      {show && <Content />}
    </div >
  );
}

export default App;
