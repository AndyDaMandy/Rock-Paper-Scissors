// This project is for the Odin Project!

//This function is an "AI" and picks rock, paper, or scissors
function computerPlay() {
  let final = ["rock", "paper", "scissors"];
  let picker = Math.floor(Math.random() * 3);
 //   console.log(final[picker]);
  return final[picker];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
playerSelection.toLowerCase();

 // if it's at tie
// console.log("you chose " + playerSelection + "!");
// console.log("the computer chose " + computerSelection + "!");
 if (playerSelection == "rock" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "paper"){
   return "It's a tie! Try again!"
 }
 // if the player loses
 if (playerSelection == "rock" && computerSelection == "paper"){
   computerScore++;
   return "Paper beats rock, the computer wins!"
 } if (playerSelection == "scissors" && computerSelection == "rock"){
   computerScore++;
   return "Rock beats Scissors, you lose!"
 } if (playerSelection == "paper" && computerSelection == "scissors"){
   computerScore++;
   return "Scissors beats paper, you lose!"
 }
 //if the player wins
 if (computerSelection == "rock" && playerSelection == "paper"){
   playerScore++
   return "Paper beats rock, you win!"
 } if (computerSelection == "paper" && playerSelection == "scissors"){
   return "Scissors beats paper, you win!"
 } if (computerSelection == "scissors" && playerSelection == "rock"){
   return "Rock beats scissors, you win!"
 }
}
// the next step is to create a game function that has rounds! Interesting!
function game(){
  let round = 1;
   let player = prompt("Will you choose, rock, paper, or scissors?");
 console.log(player);
 let comp = computerPlay();
  for (let i = 1; i <= 5; i++){
    if (round === 5){
      console.log("Round 5, Final Round!");
      playRound(player, comp);
    } else{  console.log("Round " + round);
    playRound(player, comp);
    player = prompt("Will you choose, rock, paper, or scissors?");
    round++;
    }
  }
}
let button = document.getElementById("start");
button.addEventListener('click', () => {game()});
//console.log(game());
// My idea for this is once the player clicks the button, it opens up 3 new buttons
// It will also say "choose, rock, paper, or scissors!"
// once the choices are picked, the three buttons will disappear and text displaying their choiec will appear under "player choice"
// then it will show the "computer choice" after a 1-second delay 
// This way the choices are minimized from a text standpoint.
// Once the game is over, it will say "again?"


