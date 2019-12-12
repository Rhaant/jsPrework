const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');

let computerMoves = ["kamień", "papier", "nożyce"];
let playerInput ;
let i = Math.floor(Math.random()*computerMoves.length)
const computerMove = computerMoves[i];
 
console.log(i);
console.log(playerInput)

buttonPaper.addEventListener('click', () => {
    playerInput = 1;
    clearMessages();
    printMessage(`komputer wybrał ${computerMove}`);
    checkResult(playerInput, i);
})
buttonRock.addEventListener('click', () => {
    playerInput = 0;
    clearMessages();
    printMessage(`komputer wybrał ${computerMove}`);
    checkResult(playerInput, i);
})
buttonScissors.addEventListener('click', () => {
    playerInput = 2;
    clearMessages();
    printMessage(`komputer wybrał ${computerMove}`);
    checkResult(playerInput, i);
})
