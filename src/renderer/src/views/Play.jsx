import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Buttons from "@renderer/components/Buttons";
import Cards from "@renderer/components/Cards";
import "./viewscss/play.css";

export const Play = () => {
  let playerPoints = 0;
  let dealerPoints = 0;

  const [playerCards, setPlayerCards] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);

  const navigate = useNavigate();

  const [isHidden, setIsHidden] = useState(false);

  // Array de rutas para las cartas con rutas corregidas
  const routes = [
    // Diamantes
    { path: "../../../public/cards/svg/image 1.svg", value: "A", suit: "diamante" },
    { path: "../../../public/cards/svg/image 2.svg", value: "2", suit: "diamante" },
    { path: "../../../public/cards/svg/image 3.svg", value: "3", suit: "diamante" },
    { path: "../../../public/cards/svg/image 4.svg", value: "4", suit: "diamante" },
    { path: "../../../public/cards/svg/image 5.svg", value: "5", suit: "diamante" },
    { path: "../../../public/cards/svg/image 6.svg", value: "6", suit: "diamante" },
    { path: "../../../public/cards/svg/image 7.svg", value: "7", suit: "diamante" },
    { path: "../../../public/cards/svg/image 8.svg", value: "8", suit: "diamante" },
    { path: "../../../public/cards/svg/image 9.svg", value: "9", suit: "diamante" },
    { path: "../../../public/cards/svg/image 10.svg", value: "10", suit: "diamante" },
    { path: "../../../public/cards/svg/image 11.svg", value: "10", suit: "diamante" },
    { path: "../../../public/cards/svg/image 12.svg", value: "10", suit: "diamante" },
    { path: "../../../public/cards/svg/image 13.svg", value: "10", suit: "diamante" },

    // Tréboles
    { path: "../../../public/cards/svg/image 14.svg", value: "A", suit: "trébol" },
    { path: "../../../public/cards/svg/image 15.svg", value: "2", suit: "trébol" },
    { path: "../../../public/cards/svg/image 16.svg", value: "3", suit: "trébol" },
    { path: "../../../public/cards/svg/image 17.svg", value: "4", suit: "trébol" },
    { path: "../../../public/cards/svg/image 18.svg", value: "5", suit: "trébol" },
    { path: "../../../public/cards/svg/image 19.svg", value: "6", suit: "trébol" },
    { path: "../../../public/cards/svg/image 20.svg", value: "7", suit: "trébol" },
    { path: "../../../public/cards/svg/image 21.svg", value: "8", suit: "trébol" },
    { path: "../../../public/cards/svg/image 22.svg", value: "9", suit: "trébol" },
    { path: "../../../public/cards/svg/image 23.svg", value: "10", suit: "trébol" },
    { path: "../../../public/cards/svg/image 24.svg", value: "10", suit: "trébol" },
    { path: "../../../public/cards/svg/image 25.svg", value: "10", suit: "trébol" },
    { path: "../../../public/cards/svg/image 26.svg", value: "10", suit: "trébol" },

    // Corazones
    { path: "../../../public/cards/svg/image 27.svg", value: "A", suit: "corazón" },
    { path: "../../../public/cards/svg/image 28.svg", value: "2", suit: "corazón" },
    { path: "../../../public/cards/svg/image 29.svg", value: "3", suit: "corazón" },
    { path: "../../../public/cards/svg/image 30.svg", value: "4", suit: "corazón" },
    { path: "../../../public/cards/svg/image 31.svg", value: "5", suit: "corazón" },
    { path: "../../../public/cards/svg/image 32.svg", value: "6", suit: "corazón" },
    { path: "../../../public/cards/svg/image 33.svg", value: "7", suit: "corazón" },
    { path: "../../../public/cards/svg/image 34.svg", value: "8", suit: "corazón" },
    { path: "../../../public/cards/svg/image 35.svg", value: "9", suit: "corazón" },
    { path: "../../../public/cards/svg/image 36.svg", value: "10", suit: "corazón" },
    { path: "../../../public/cards/svg/image 37.svg", value: "10", suit: "corazón" },
    { path: "../../../public/cards/svg/image 38.svg", value: "10", suit: "corazón" },
    { path: "../../../public/cards/svg/image 39.svg", value: "10", suit: "corazón" },

    // Picas
    { path: "../../../public/cards/svg/image 40.svg", value: "A", suit: "pica" },
    { path: "../../../public/cards/svg/image 41.svg", value: "2", suit: "pica" },
    { path: "../../../public/cards/svg/image 42.svg", value: "3", suit: "pica" },
    { path: "../../../public/cards/svg/image 43.svg", value: "4", suit: "pica" },
    { path: "../../../public/cards/svg/image 44.svg", value: "5", suit: "pica" },
    { path: "../../../public/cards/svg/image 45.svg", value: "6", suit: "pica" },
    { path: "../../../public/cards/svg/image 46.svg", value: "7", suit: "pica" },
    { path: "../../../public/cards/svg/image 47.svg", value: "8", suit: "pica" },
    { path: "../../../public/cards/svg/image 48.svg", value: "9", suit: "pica" },
    { path: "../../../public/cards/svg/image 49.svg", value: "10", suit: "pica" },
    { path: "../../../public/cards/svg/image 50.svg", value: "10", suit: "pica" },
    { path: "../../../public/cards/svg/image 51.svg", value: "10", suit: "pica" },
    { path: "../../../public/cards/svg/image 52.svg", value: "10", suit: "pica" }
  ];

  // Función para añadir una nueva carta
  const hit = () => {
    const randomIndex = Math.floor(Math.random() * routes.length);
    setPlayerCards((prev) => [...prev, routes[randomIndex]]);
    console.log(playerPoints);

  };

  function hitDealer() {
    const randomIndex = Math.floor(Math.random() * routes.length);
    setDealerCards((prev) => [...prev, routes[randomIndex]]);
    dealerPoints = dealerPoints + routes.value
    console.log(dealerPoints);

  }



  // Sonido
  const audioRef = useRef(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    audioRef.current = new Audio("/sounds/woodenClick.mp3");
    audioRef.current.play().catch((err) => {
      console.error("Error al reproducir el audio:", err);
    });
  };

  const goToHome = () => {
    playSound();
    document.body.style.backgroundImage = "url(/images/bgimage.png)";
    navigate("/");
  };



  useEffect(() => {
    hitDealer();


  }, []);


  function playOponent() {
    setIsHidden(true);

    setInterval(() => {
      hitDealer();
    }, 2000);

  }


  return (
    <>
      <div className="btn-goBack">
        <Buttons onClick={goToHome} text={"Go Home"} />
      </div>

      <main className="table">
        <div className="dealer">
          {dealerCards.map((card, index) => (
            <Cards key={index} route={card.path} value={card.value} />
          ))}
        </div>

        <div className="deck">
          <img src="../../../public/cards/BackOfDeck.png" alt="Deck" />
          <img id="secondDeck" src="../../../public/cards/BackOfDeck.png" alt="Deck" />
        </div>

        <div className="player">
          <div className="player-cards">
            {/* Renderiza las cartas del jugador */}
            {playerCards.map((card, index) => (
              <Cards key={index} route={card.path} value={card.value} />
            ))}
          </div>

          <div className={isHidden ? "hideButton" : "player-btns"} >
            <Buttons
              onClick={() => {
                hit();
                playSound();
              }}
              text={"Hit"}
            />
            <Buttons onClick={playOponent} text={"Stand"} />
          </div>
        </div>
      </main >
    </>
  );
};