const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');

let computerMoves = ["kamień", "papier", "nożyce"];
let i;
let playerInput;

 

buttonPaper.addEventListener('click', () => {
    playerInput = 1;
    letsPlayTheGame(i, playerInput);
})
buttonRock.addEventListener('click', () => {
    playerInput = 0;
    letsPlayTheGame(i, playerInput);

})
buttonScissors.addEventListener('click', () => {
    playerInput = 2;
    letsPlayTheGame(i, playerInput);
})

console.log(i);