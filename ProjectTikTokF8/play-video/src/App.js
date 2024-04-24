import Video from './Video';
import './App.css';
import { useRef } from 'react';
function App() {
  const videoRef = useRef()

  const handlePlay = () => {
    videoRef.current.play()
  }
  const handlePause = () => {
    videoRef.current.pause()
  }
  return (
    <div className="App">
      <h1 className='heading'>Heading</h1>
      <Video ref={videoRef} />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
}

export default App;
