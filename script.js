const teamCoach = document.getElementById("head-coach");
const teamName = document.getElementById("team");
const cupYear = document.getElementById("year");
const dropdownList = document.getElementById("players");
const playerCards = document.getElementById("player-cards");

const footballTeam = {
  team: "Argentina",
  year: 1986,
  headCoach: "Carlos Bilardo",
  players: [
    { name: "Sergio Almiron", position: "forward", isCaptain: false },
    { name: "Sergio Batista", position: "midfielder", isCaptain: false },
    { name: "Ricardo Bochini", position: "midfielder", isCaptain: false },
    { name: "Claudio Borghi", position: "midfielder", isCaptain: false },
    { name: "Jose Luis Brown", position: "defender", isCaptain: false },
    { name: "Daniel Passarella", position: "defender", isCaptain: false },
    { name: "Jorge Burruchaga", position: "forward", isCaptain: false },
    { name: "Nestor Clausen", position: "defender", isCaptain: false },
    { name: "Jose Luis Cuciuffo", position: "defender", isCaptain: false },
    { name: "Diego Maradona", position: "midfielder", isCaptain: true },
    { name: "Jorge Valdano", position: "forward", isCaptain: false },
    { name: "Hector Enrique", position: "midfielder", isCaptain: false },
    { name: "Oscar Garre", position: "defender", isCaptain: false },
    { name: "Ricardo Giusil", position: "midfielder", isCaptain: false },
    { name: "Luis Islas", position: "goalkeeper", isCaptain: false },
    { name: "Julio Olarticoechea", position: "defender", isCaptain: false },
    { name: "Pedro Pasculli", position: "forward", isCaptain: false },
    { name: "Nery Pumpido", position: "goalkeeper", isCaptain: false },
    { name: "Oscar Ruggeri", position: "defender", isCaptain: false },
    { name: "Carlos Tapia", position: "midfielder", isCaptain: false },
    { name: "Marcelo Trobbiani", position: "midfielder", isCaptain: false },
    { name: "Hector Zelada", position: "goalkeeper", isCaptain: false },
  ],
};
Object.freeze(footballTeam);

const { team, year, players } = footballTeam;
const { headCoach } = footballTeam;

teamCoach.textContent = headCoach;
teamName.textContent = team;
cupYear.textContent = year;

const setPlayerCards = (arr = players) => {
  playerCards.innerHTML = arr
    .map(
      ({ name, position, isCaptain }) =>
        `<div class="player-card">
        <h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
        <p>Position: ${position}</p>
      </div>
      `
    )
    .join("");
};

setPlayerCards();
dropdownList.addEventListener("change", (event) => {
  playerCards.innerHTML = "";
  switch (event.target.value) {
    case "forward":
      setPlayerCards(players.filter((player) => player.position === "forward"));
      break;
    case "midfielder":
      setPlayerCards(
        players.filter((player) => player.position === "midfielder")
      );
      break;
    case "defender":
      setPlayerCards(
        players.filter((player) => player.position === "defender")
      );
      break;
    case "goalkeeper":
      setPlayerCards(
        players.filter((player) => player.position === "goalkeeper")
      );
      break;
    default:
      setPlayerCards();
      break;
  }
});
