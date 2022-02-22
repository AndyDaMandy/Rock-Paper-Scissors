// This project is for the Odin Project!

//This function is an "AI" and picks rock, paper, or scissors
function computerPlay() {
  let final = ["rock", "paper", "scissors"];
  let picker = Math.floor(Math.random() * 3);
 //   console.log(final[picker]);
  return final[picker];
}
let playerChoice = '';
let playerScore = 0;
let computerScore = 0;
let round = 1;
function rockSel(){
 playerChoice = "rock"
 document.querySelector('#selection').innerText = "You picked Rock!";
 game();
 round++;
};
document.querySelector('#rock').addEventListener('click', ()=> {rockSel()});
function paperSel(){
  playerChoice = "paper"
  document.querySelector('#selection').innerText = "You picked Paper!";
  game();
  round++;
}
document.querySelector('#paper').addEventListener('click', ()=> {paperSel()});
function scissorsSel(){
  playerChoice = "scissors"
  document.querySelector('#selection').innerText = "You picked Scissors!";
  game();
  round++;
}
document.querySelector('#scissors').addEventListener('click', ()=> {scissorsSel()});
function playRound(playerSelection, computerSelection) {
 // if it's at tie
// console.log("you chose " + playerSelection + "!");
// console.log("the computer chose " + computerSelection + "!");
 if (playerSelection == "rock" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "paper"){
   document.getElementById("results").innerText = "It's a tie!"
 }
 // if the player loses
 if (playerSelection == "rock" && computerSelection == "paper"){
   computerScore++;
   document.getElementById("results").innerText = "Paper beats rock, the computer wins!"
 } if (playerSelection == "scissors" && computerSelection == "rock"){
   computerScore++;
   document.getElementById("results").innerText = "Rock beats Scissors, you lose!"
 } if (playerSelection == "paper" && computerSelection == "scissors"){
   computerScore++;
   document.getElementById("results").innerText = "Scissors beats paper, you lose!"
 }
 //if the player wins
 if (computerSelection == "rock" && playerSelection == "paper"){
   playerScore++
   document.getElementById("results").innerText = "Paper beats rock, you win!"
 } if (computerSelection == "paper" && playerSelection == "scissors"){
   playerScore++
   document.getElementById("results").innerText = "Scissors beats paper, you win!"
 } if (computerSelection == "scissors" && playerSelection == "rock"){
   playerScore++
   document.getElementById("results").innerText = "Rock beats scissors, you win!"
 }
  document.getElementById("round").innerText = `Round: ${round}`
document.getElementById("score").innerText = `Player Score: ${playerScore} AI Score: ${computerScore}`
}

function game(){
  let comp = computerPlay();
  if (round < 5) {
    let print = comp.charAt(0).toUpperCase() + comp.slice(1);
    document.getElementById("ai-choice").innerText = `AI Choice: ${print}`
    playRound(playerChoice, comp);
  } else {
    document.querySelector('#btn-loc').hidden = true;
    let print = comp.charAt(0).toUpperCase() + comp.slice(1);
    document.getElementById("ai-choice").innerText = `AI Choice: ${print}`
    playRound(playerChoice, comp);
    if (playerScore > computerScore){
      document.getElementById("results").innerText = "You win! Click start to try again!"
    } else if (playerScore < computerScore){
      document.getElementById("results").innerText = "Too bad, the AI wins! Click start to try again!!"
    } else if (playerScore === computerScore){
    document.getElementById("results").innerText = "It's a tie, click start to try again!"
  }
   document.getElementById("start").hidden = false; 
  }
};
// the next step is to create a game function that has rounds! Interesting!
/*function game(){
  let round = 1;
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
*/
function start(){
  playerChoice = '';
  playerScore = 0;
  computerScore = 0;
  round = 1;
  document.getElementById("results").innerText = "";
  document.getElementById("score").innerText = "";
  document.querySelector('#selection').innerText = "";
  document.getElementById("ai-choice").innerText = "";
  document.getElementById("round").innerText = "";
  document.getElementById("start").hidden = true;
  document.querySelector('#btn-loc').hidden = false;
}
let button = document.getElementById("start");
button.addEventListener('click', () => {start()});
//console.log(game());
// My idea for this is once the player clicks the button, it opens up 3 new buttons
// It will also say "choose, rock, paper, or scissors!"
// once the choices are picked, the three buttons will disappear and text displaying their choiec will appear under "player choice"
// then it will show the "computer choice" after a 1-second delay 
// This way the choices are minimized from a text standpoint.
// Once the game is over, it will say "again?"


