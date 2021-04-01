import ReactPlayer from 'react-player'
import './App.css';
import React, { useEffect } from 'react'

function App() {
  const [muted, setMuted] = React.useState(true)
  useEffect(() => {
    setTimeout(() => {
      setMuted(false)
    }, 2000)
  }, [])
  return (
    <div className="App">
      {/* <video controls url='videoplayback.mp4' width="100%" muted={muted} playing /> */}
        <video muted={muted} autoPlay controls>
          <source src="videoplayback.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
    </div>
  );
}

export default App;
