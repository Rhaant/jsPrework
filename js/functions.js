function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function checkResult(playerInput, i){
	if (playerInput == i ) {
		printMessage('remis')
	}
	else if ( playerInput > i) {
		if ( i == 1){printMessage('wygrałeś')}
		else if (i == 0 && playerInput == 2) {printMessage('przegrałeś')}
		else {printMessage('wygraleś')}
	}
	else if (playerInput < i) {
		if (playerInput == 1){printMessage('przegrałeś')}
		else if (playerInput == 0 && i == 2) {printMessage('wygrałeś')}
		else {printMessage('przegrales')}
	}
}

function letsPlayTheGame (){
	i = Math.floor(Math.random()*computerMoves.length);
	console.log(i);
    clearMessages();
    printMessage(`komputer wybrał ${computerMoves[i]}`);
    checkResult(playerInput, i);
}