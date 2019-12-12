const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');

let computerMoves = ["kamień", "papier", "nożyce"];
let i = Math.floor(Math.random()*computerMoves.length);
let playerInput;

 
console.log(i);
console.log(playerInput)

buttonPaper.addEventListener('click', () => {
    playerInput = 1;
    i = Math.floor(Math.random()*computerMoves.length);
    clearMessages();
    printMessage(`komputer wybrał ${computerMoves[i]}`);
    checkResult(playerInput, i);
})
buttonRock.addEventListener('click', () => {
    playerInput = 0;
    i = Math.floor(Math.random()*computerMoves.length);
    clearMessages();
    printMessage(`komputer wybrał ${computerMoves[i]}`);
    checkResult(playerInput, i);
})
buttonScissors.addEventListener('click', () => {
    playerInput = 2;
    i = Math.floor(Math.random()*computerMoves.length);
    clearMessages();
    printMessage(`komputer wybrał ${computerMoves[i]}`);
    checkResult(playerInput, i);
})
