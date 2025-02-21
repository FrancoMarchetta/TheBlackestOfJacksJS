import { useNavigate } from "react-router-dom";
import "../views/viewscss/HomePage.css";
import Buttons from "@renderer/components/Buttons";
import { useRef } from "react";

const HomePage = () => {
  /////////////////sonidos de botones///////////////////////////
  const audioRef = useRef(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 10;
    }

    audioRef.current = new Audio(import("../assets/sounds/woodenClick.mp3"));
    audioRef.current.play().catch((err) => {
      console.error("Error al reproducir el audio:", err);
    });
  };
  /////////////////////////////////////////////////////////
  const path = useNavigate();

  const changeBg = () => {
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "#088647";
  };

  const goToPlay = () => {
    playSound();
    path("/play");
    changeBg();
  };

  return (
    <>
      <main>
        <div className="titleDiv">

          <h1>The Blackest Of Jacks</h1>

          {/* <div className="sign">
            <span className="fast-flicker">The </span> Blackest <span className="flicker"> Of </span> Jacks
          </div> */}

        </div>

        <div className="Buttons-zone">
          <a href="https://github.com/FrancoMarchetta" target="_blank" rel="noopener noreferrer">
            <Buttons onClick={() => playSound()} text={" My GitHub"} />
          </a>
          <Buttons onClick={goToPlay} text={"Play"} />
        </div>
      </main>
    </>
  );
};

export default HomePage;
