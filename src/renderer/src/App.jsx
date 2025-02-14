import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import { Play } from "./views/Play";
import { useRef, useState } from "react";

function App() {
  const [musicOn, setMusicOn] = useState(true); // se usa para hacer que cambie el icono, no para gestionar la musica como tal
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  //Crear y controlar la música
  const toggleMusic = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("public/sounds/BackgroundMusic.mp3");
      audioRef.current.loop = true;
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => {
        console.error("Error al reproducir el audio:", err);
      });
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <Router>
        {/* Controlador del sonido */}
        {musicOn ? (
          <img
            className="mute"
            onClick={() => {
              setMusicOn(false);
              toggleMusic();
            }}
            src="public/images/soundOff.svg"
            alt="Mute"
          />
        ) : (
          <img
            className="mute"
            onClick={() => {
              setMusicOn(true);
              toggleMusic();
            }}
            src="public/images/soundOn.svg"
            alt="Unmute"
          />
        )}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/play" element={<Play />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
