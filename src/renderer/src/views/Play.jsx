import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Buttons from "@renderer/components/Buttons";
import Cards from "@renderer/components/Cards";
import "./viewscss/play.css";
import woodenClick from "../assets/sounds/woodenClick.mp3";
import bgImage from "../assets/images/bgimage.png";
import backOfDeck from "../assets/cards/BackOfDeck.png";
import image1 from "../assets/cards/svg/image 1.svg";
import image2 from "../assets/cards/svg/image 2.svg";
import image3 from "../assets/cards/svg/image 3.svg";
import image4 from "../assets/cards/svg/image 4.svg";
import image5 from "../assets/cards/svg/image 5.svg";
import image6 from "../assets/cards/svg/image 6.svg";
import image7 from "../assets/cards/svg/image 7.svg";
import image8 from "../assets/cards/svg/image 8.svg";
import image9 from "../assets/cards/svg/image 9.svg";
import image10 from "../assets/cards/svg/image 10.svg";
import image11 from "../assets/cards/svg/image 11.svg";
import image12 from "../assets/cards/svg/image 12.svg";
import image13 from "../assets/cards/svg/image 13.svg";
import image14 from "../assets/cards/svg/image 14.svg";
import image15 from "../assets/cards/svg/image 15.svg";
import image16 from "../assets/cards/svg/image 16.svg";
import image17 from "../assets/cards/svg/image 17.svg";
import image18 from "../assets/cards/svg/image 18.svg";
import image19 from "../assets/cards/svg/image 19.svg";
import image20 from "../assets/cards/svg/image 20.svg";
import image21 from "../assets/cards/svg/image 21.svg";
import image22 from "../assets/cards/svg/image 22.svg";
import image23 from "../assets/cards/svg/image 23.svg";
import image24 from "../assets/cards/svg/image 24.svg";
import image25 from "../assets/cards/svg/image 25.svg";
import image26 from "../assets/cards/svg/image 26.svg";
import image27 from "../assets/cards/svg/image 27.svg";
import image28 from "../assets/cards/svg/image 28.svg";
import image29 from "../assets/cards/svg/image 29.svg";
import image30 from "../assets/cards/svg/image 30.svg";
import image31 from "../assets/cards/svg/image 31.svg";
import image32 from "../assets/cards/svg/image 32.svg";
import image33 from "../assets/cards/svg/image 33.svg";
import image34 from "../assets/cards/svg/image 34.svg";
import image35 from "../assets/cards/svg/image 35.svg";
import image36 from "../assets/cards/svg/image 36.svg";
import image37 from "../assets/cards/svg/image 37.svg";
import image38 from "../assets/cards/svg/image 38.svg";
import image39 from "../assets/cards/svg/image 39.svg";
import image40 from "../assets/cards/svg/image 40.svg";
import image41 from "../assets/cards/svg/image 41.svg";
import image42 from "../assets/cards/svg/image 42.svg";
import image43 from "../assets/cards/svg/image 43.svg";
import image44 from "../assets/cards/svg/image 44.svg";
import image45 from "../assets/cards/svg/image 45.svg";
import image46 from "../assets/cards/svg/image 46.svg";
import image47 from "../assets/cards/svg/image 47.svg";
import image48 from "../assets/cards/svg/image 48.svg";
import image49 from "../assets/cards/svg/image 49.svg";
import image50 from "../assets/cards/svg/image 50.svg";
import image51 from "../assets/cards/svg/image 51.svg";
import image52 from "../assets/cards/svg/image 52.svg";

export const Play = () => {
  let starting;

  const [playerCards, setPlayerCards] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);

  const navigate = useNavigate();

  const [isHidden, setIsHidden] = useState(false);

  const playerPoinstRef = useRef(0);
  const dealerPoinstRef = useRef(0);

  const dealerIntervalRef = useRef(null);

  // Sonido
  const audioRef = useRef(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    audioRef.current = new Audio(woodenClick);
    audioRef.current.play().catch((err) => {
      console.error("Error al reproducir el audio:", err);
    });
  };

  const goToHome = () => {
    playSound();
    document.body.style.backgroundImage = `url(${bgImage})`;
    navigate("/");
  };

  // Array de rutas para las cartas con rutas corregidas
  const routes = [
    // Diamantes
    { path: image1, value: "A", suit: "diamante" },
    { path: image2, value: "2", suit: "diamante" },
    { path: image3, value: "3", suit: "diamante" },
    { path: image4, value: "4", suit: "diamante" },
    { path: image5, value: "5", suit: "diamante" },
    { path: image6, value: "6", suit: "diamante" },
    { path: image7, value: "7", suit: "diamante" },
    { path: image8, value: "8", suit: "diamante" },
    { path: image9, value: "9", suit: "diamante" },
    { path: image11, value: "10", suit: "diamante" },
    { path: image10, value: "10", suit: "diamante" },
    { path: image12, value: "10", suit: "diamante" },
    { path: image13, value: "10", suit: "diamante" },
    // Tréboles
    { path: image15, value: "2", suit: "trébol" },
    { path: image14, value: "A", suit: "trébol" },
    { path: image16, value: "3", suit: "trébol" },
    { path: image17, value: "4", suit: "trébol" },
    { path: image18, value: "5", suit: "trébol" },
    { path: image19, value: "6", suit: "trébol" },
    { path: image20, value: "7", suit: "trébol" },
    { path: image21, value: "8", suit: "trébol" },
    { path: image22, value: "9", suit: "trébol" },
    { path: image23, value: "10", suit: "trébol" },
    { path: image24, value: "10", suit: "trébol" },
    { path: image25, value: "10", suit: "trébol" },
    { path: image26, value: "10", suit: "trébol" },
    // Corazones
    { path: image27, value: "A", suit: "corazón" },
    { path: image28, value: "2", suit: "corazón" },
    { path: image29, value: "3", suit: "corazón" },
    { path: image30, value: "4", suit: "corazón" },
    { path: image31, value: "5", suit: "corazón" },
    { path: image32, value: "6", suit: "corazón" },
    { path: image33, value: "7", suit: "corazón" },
    { path: image34, value: "8", suit: "corazón" },
    { path: image35, value: "9", suit: "corazón" },
    { path: image36, value: "10", suit: "corazón" },
    { path: image37, value: "10", suit: "corazón" },
    { path: image38, value: "10", suit: "corazón" },
    { path: image39, value: "10", suit: "corazón" },
    // Picas
    { path: image40, value: "A", suit: "pica" },
    { path: image41, value: "2", suit: "pica" },
    { path: image42, value: "3", suit: "pica" },
    { path: image43, value: "4", suit: "pica" },
    { path: image44, value: "5", suit: "pica" },
    { path: image45, value: "6", suit: "pica" },
    { path: image46, value: "7", suit: "pica" },
    { path: image47, value: "8", suit: "pica" },
    { path: image48, value: "9", suit: "pica" },
    { path: image49, value: "10", suit: "pica" },
    { path: image50, value: "10", suit: "pica" },
    { path: image51, value: "10", suit: "pica" },
    { path: image52, value: "10", suit: "pica" }
  ];

  // Función para añadir una nueva carta
  const hit = () => {
    const randomIndex = Math.floor(Math.random() * routes.length);
    setPlayerCards((prev) => [...prev, routes[randomIndex]]);

    if (routes[randomIndex].value == "A" && playerPoinstRef.current + 11 <= 21) {
      routes[randomIndex].value = 11;
    }
    if (routes[randomIndex].value == "A" && playerPoinstRef.current + 11 > 21) {
      routes[randomIndex].value = 1;
    }

    playerPoinstRef.current = parseInt(playerPoinstRef.current) + parseInt(routes[randomIndex].value);

    console.log("player points: " + playerPoinstRef.current);
  };

  function hitDealer() {
    const randomIndex = Math.floor(Math.random() * routes.length);
    setDealerCards((prev) => [...prev, routes[randomIndex]]);

    if (routes[randomIndex].value == "A" && dealerPoinstRef.current + 11 <= 21) {
      routes[randomIndex].value = 11;
    }
    if (routes[randomIndex].value == "A" && dealerPoinstRef.current + 11 > 21) {
      routes[randomIndex].value = 1;
    }
    dealerPoinstRef.current = parseInt(dealerPoinstRef.current) + parseInt(routes[randomIndex].value);

    console.log("dealer points: " + dealerPoinstRef.current);
  }

  // verificar si hay ganador o empate
  // temporizador para asegurarme de que primero se muestre la carta y despues se muestre el mensaje
  setTimeout(() => {
    if (playerPoinstRef.current == 21 && dealerPoinstRef.current != 21) {
      clearInterval(dealerIntervalRef.current);
      alert("YOU HAVE BLACKJACK!! YOU WIN!!");
      goToHome();
    }

    if (playerPoinstRef.current != 21 && dealerPoinstRef.current == 21) {
      clearInterval(dealerIntervalRef.current);
      alert("YOU LOSE... Dealer Has BlackJack");
      goToHome();
    }

    if (playerPoinstRef.current == 21 && dealerPoinstRef.current == 21) {
      clearInterval(dealerIntervalRef.current);
      alert("DRAW...");
      goToHome();
    }

    if (playerPoinstRef.current > 21) {
      alert("YOU LOSE");
      goToHome();
    }

    if (dealerPoinstRef.current > 21) {
      clearInterval(dealerIntervalRef.current);
      alert("YOU WIN!!");
      goToHome();
    }
  }, 1000);

  //Hace que cuando se cargue por primera vez la pagina se repartan primero las cartas de dealer.
  //sin esta cagada se rompe toda la interfaz.
  //parece que por alguna razon todo todo depende de que se reparta primero al dealer o sino todo deja de funcionar
  //Absolutamente Magico...

  useEffect(() => {
    hitDealer();
    hit();
  }, []);

  function playOponent() {
    setIsHidden(true);

    dealerIntervalRef.current = setInterval(() => {
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
          <img src={backOfDeck} alt="Deck" />
          <img id="secondDeck" src={backOfDeck} alt="Deck" />
        </div>

        <div className="player">
          <div className="player-cards">
            {/* Renderiza las cartas del jugador */}
            {playerCards.map((card, index) => (
              <Cards key={index} route={card.path} value={card.value} />
            ))}
          </div>

          <div className={isHidden ? "hideButton" : "player-btns"}>
            <Buttons
              onClick={() => {
                hit();
                playSound();
              }}
              text={"Hit"}
            />
            <Buttons onClick={playOponent} text={"Stand"} />
          </div>
          {/* <p>puntos: </p> */}
        </div>
      </main>
    </>
  );
};
