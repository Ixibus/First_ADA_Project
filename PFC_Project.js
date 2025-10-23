let pierrePlayer = document.getElementById("pierre");
let feuillePlayer = document.getElementById("feuille");
let ciseauPlayer = document.getElementById("ciseau");

let choicesArray = ["🪨", "🌿", "✂️"];

let player = document.getElementById("player_choice");
let cpu = document.getElementById("cpu_choice");

let isPlayerClicking = document.querySelector(
  ".player_element_choices_container"
);

let cpuScore = document.getElementById("cpu_score");
let playerScore = document.getElementById("player_score");

let isWinnerPlayer = document.getElementById("isWinnerPlayer");

let btnReset = document.getElementById("PFC_reset_btn");

function eventClickPlayer() {
  // Player choice
  pierrePlayer.addEventListener("click", () => {
    player.innerText = pierrePlayer.innerText;
  });
  feuillePlayer.addEventListener("click", () => {
    player.innerText = feuillePlayer.innerText;
  });
  ciseauPlayer.addEventListener("click", () => {
    player.innerText = ciseauPlayer.innerText;
  });
}

cpuScore.innerText = 0;
playerScore.innerText = 0;

function randomChoiceTrigger() {
  let cpuChoice = choicesArray.at(Math.trunc(Math.random() * 3));
  // CPU choice
  cpu.innerText = cpuChoice;

  if (player.innerText === "🌿" && cpu.innerText === "🪨") {
    playerScore.innerText++;
    isWinnerPlayer.innerText = "Le Feuile gagne 😁";
  }
  if (cpu.innerText === "🌿" && player.innerText === "🪨") {
    cpuScore.innerText++;
    isWinnerPlayer.innerText = "La Pierre perd 😒...";
  }

  if (player.innerText === "✂️" && cpu.innerText === "🪨") {
    cpuScore.innerText++;
    isWinnerPlayer.innerText = "Les Ciseaux perdent 😒...";
}
if (cpu.innerText === "✂️" && player.innerText === "🪨") {
    playerScore.innerText++;
    isWinnerPlayer.innerText = "La Pierre gagne 😁";
  }

  if (player.innerText === "✂️" && cpu.innerText === "🌿") {
    playerScore.innerText++;
    isWinnerPlayer.innerText = "Les Ciseaux gagnent 😁";
  }
  if (cpu.innerText === "✂️" && player.innerText === "🌿") {
    cpuScore.innerText++;
    isWinnerPlayer.innerText = "La feuille perd 😒...";
  }

  if (
    (cpu.innerText === "🪨" && player.innerText === "🪨") ||
    (cpu.innerText === "✂️" && player.innerText === "✂️") ||
    (cpu.innerText === "🌿" && player.innerText === "🌿")
  ) {
    isWinnerPlayer.innerText = "Oh! égalité 😐";
  }
}


isPlayerClicking.addEventListener("click", eventClickPlayer());
isPlayerClicking.addEventListener("click", () => randomChoiceTrigger());

btnReset.addEventListener("click", () => {
  cpu.innerText = "";
  player.innerText = "";  
  cpuScore.innerText = 0;
    playerScore.innerText = 0;
    isWinnerPlayer.innerText = "";
})

// CASES
