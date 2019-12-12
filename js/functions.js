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
		else if (playerInput == 2) {printMessage('przegrałeś')}
		else {printMessage('wygraleś')}
	}
	else if (playerInput < i) {
		if (i == 1){printMessage('przegrałeś')}
		else {printMessage('wygrales')}
	}
}