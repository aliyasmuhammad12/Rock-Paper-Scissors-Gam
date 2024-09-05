let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let result = document.querySelector("#msg");
const scoreUser = document.querySelector("#user");
const scoreComputer = document.querySelector("#computer");

const genCompChoice = () => {
  const options = ["rock", "page", "scissor"];
  const randomIndx = Math.floor(Math.random() * 3);
  return options[randomIndx];
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
      userScore++;
      result.innerText = `You Win! Your ${userChoice} Beats ${compChoice}`;
      result.style.backgroundColor = "green";
      scoreUser.innerText = userScore;
    } else {
      compScore++;
      result.innerText = `You lose! ${compChoice} Beats Your ${userChoice}`;
      result.style.backgroundColor = "red";
      scoreComputer.innerText = compScore;
    }
  };

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //page and secissor
      userWin = compChoice === "page" ? false : true;
    } else if (userChoice === "page") {
      userWin = compChoice === "rock" ? true : false;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};
const drawGame = () => {
  result.innerText = "Game is Drawn! Play Again";
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log(userChoice)
    playGame(userChoice);
  });
});
