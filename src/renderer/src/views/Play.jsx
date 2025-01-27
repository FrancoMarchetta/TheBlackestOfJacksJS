import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Buttons from "@renderer/components/Buttons";
import Cards from "@renderer/components/Cards";
import "./viewscss/play.css";

export const Play = () => {
  // Array de rutas para las cartas
  const routes = [
    "../../../public/cards/svg/image 1.svg",
    "../../../public/cards/svg/image 2.svg",
    "../../../public/cards/svg/image 3.svg",
    "../../../public/cards/svg/image 4.svg",
    "../../../public/cards/svg/image 5.svg",
    "../../../public/cards/svg/image 6.svg",
    "../../../public/cards/svg/image 7.svg",
    "../../../public/cards/svg/image 8.svg",
    "../../../public/cards/svg/image 9.svg",
    "../../../public/cards/svg/image 10.svg",
    "../../../public/cards/svg/image 11.svg",
    "../../../public/cards/svg/image 12.svg",
    "../../../public/cards/svg/image 13.svg",
    "../../../public/cards/svg/image 14.svg",
    "../../../public/cards/svg/image 15.svg",
    "../../../public/cards/svg/image 16.svg",
    "../../../public/cards/svg/image 17.svg",
    "../../../public/cards/svg/image 18.svg",
    "../../../public/cards/svg/image 19.svg",
    "../../../public/cards/svg/image 20.svg",
    "../../../public/cards/svg/image 21.svg",
    "../../../public/cards/svg/image 22.svg",
    "../../../public/cards/svg/image 23.svg",
    "../../../public/cards/svg/image 24.svg",
    "../../../public/cards/svg/image 25.svg",
    "../../../public/cards/svg/image 26.svg",
    "../../../public/cards/svg/image 27.svg",
    "../../../public/cards/svg/image 28.svg",
    "../../../public/cards/svg/image 29.svg",
    "../../../public/cards/svg/image 30.svg",
    "../../../public/cards/svg/image 31.svg",
    "../../../public/cards/svg/image 32.svg",
    "../../../public/cards/svg/image 33.svg",
    "../../../public/cards/svg/image 34.svg",
    "../../../public/cards/svg/image 35.svg",
    "../../../public/cards/svg/image 36.svg",
    "../../../public/cards/svg/image 37.svg",
    "../../../public/cards/svg/image 38.svg",
    "../../../public/cards/svg/image 39.svg",
    "../../../public/cards/svg/image 40.svg",
    "../../../public/cards/svg/image 41.svg",
    "../../../public/cards/svg/image 42.svg",
    "../../../public/cards/svg/image 43.svg",
    "../../../public/cards/svg/image 44.svg",
    "../../../public/cards/svg/image 45.svg",
    "../../../public/cards/svg/image 46.svg",
    "../../../public/cards/svg/image 47.svg",
    "../../../public/cards/svg/image 48.svg",
    "../../../public/cards/svg/image 49.svg",
    "../../../public/cards/svg/image 50.svg",
    "../../../public/cards/svg/image 51.svg",
    "../../../public/cards/svg/image 52.svg",
  ];

  const [playerCards, setPlayerCards] = useState([]);

  // Función para añadir una nueva carta
  const hit = () => {
    const randomIndex = Math.floor(Math.random() * routes.length); // Selecciona una carta aleatoria
    setPlayerCards((prev) => [...prev, routes[randomIndex]]); // Agrega la carta al estado
  };

  // Sonido
  const audioRef = useRef(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    audioRef.current = new Audio("../../public/sounds/woodenClick.mp3");
    audioRef.current.play().catch((err) => {
      console.error("Error al reproducir el audio:", err);
    });
  };

  const path = useNavigate();
  const goToHome = () => {
    playSound();
    document.body.style.backgroundImage = "URL(../public/images/bgimage.png)";
    path("/");
  };

  return (
    <>
      <div className="btn-goBack">
        <Buttons onClick={goToHome} text={"Go Home"} />
      </div>

      <main className="table">
        <div className="dealer">
          <Cards route={routes[0]} />
        </div>

        <div className="deck">
          <img src="../../../public/cards/backOfDeck.png" alt="" />
          <img id="secondDeck" src="../../../public/cards/backOfDeck.png" alt="" />
        </div>

        <div className="player">
          <div className="player-cards">
            {/* Renderiza las cartas del jugador */}
            {playerCards.map((route, index) => (
              <Cards key={index} route={route} />
            ))}
          </div>

          <div className="player-btns">
            <Buttons
              onClick={() => {
                hit();
                playSound();
              }}
              text={"Hit"}
            />
            <Buttons onClick={() => { }} text={"Stand"} />
          </div>
        </div>
      </main>
    </>
  );
};
